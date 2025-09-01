import cv2
import numpy as np
from pdf2image import convert_from_path

# Path to your PDF
pdf_path = "allRecto.pdf"

# --- Settings for naming ---
names = ["L", "S", "A", "V", "E", "F", "EN" ]   # list of prefixes
name_index = 0            # current index in the list
card_counter = 1          # counter for current prefix

# Convert only the first page of PDF into an image (PIL format)
pages = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=1)
page_image = pages[0]

# Convert PIL image to OpenCV format (numpy array)
open_cv_image = np.array(page_image)
open_cv_image = cv2.cvtColor(open_cv_image, cv2.COLOR_RGB2BGR)

# --- Step 1: Convert to grayscale ---
gray = cv2.cvtColor(open_cv_image, cv2.COLOR_BGR2GRAY)

# --- Step 2: Threshold to isolate dark borders ---
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)

# --- Step 3: Find contours ---
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# --- Step 4: Sort contours by area (largest first) ---
contours = sorted(contours, key=cv2.contourArea, reverse=True)

# --- Step 5: Loop through top 8 contours (the 8 cards) ---
# Loop over all pages in PDF
pages = convert_from_path(pdf_path, dpi=300)  # remove first/last page restriction
for page_num, page_image in enumerate(pages, start=1):
    # Convert PIL to OpenCV
    open_cv_image = np.array(page_image)
    open_cv_image = cv2.cvtColor(open_cv_image, cv2.COLOR_RGB2BGR)

    card_index = 0
    for cnt in contours[:8]:
        x, y, w, h = cv2.boundingRect(cnt)

        # Crop the card from the original image
        card = open_cv_image[y:y+h, x:x+w]

        # --- Step 6: Apply margin crop ---
        margin_x = 20   # adjust as needed
        margin_y = 20   # adjust as needed

        left   = margin_x
        top    = margin_y
        right  = w - margin_x
        bottom = h - margin_y

        # Ensure margins don't go out of bounds
        if right > left and bottom > top:
            card = card[top:bottom, left:right]

        # --- Naming rule ---
        current_prefix = names[name_index]
        filename = f"{current_prefix}{card_counter}.jpg"
        # Save card as JPG
        cv2.imwrite(filename, card)
        print(f"Saved {filename}")

        card_counter += 1
        # --- Every 2 pages, move to the next prefix ---
    if page_num % 2 == 0:
        name_index = (name_index + 1) % len(names)  # cycle through list
        card_counter = 1  # reset counter for new prefix

print("✅ Done! Extracted 8 margin-cropped cards from the first page.")
