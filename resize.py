from PIL import Image

# Chemin vers l'image d'origine
input_image_path = "iconePasapa.png"
# Chemin vers l'image redimensionnée
output_image_path = "iconePasapa512.png"

# Ouvrir l'image, la redimensionner et la sauvegarder
with Image.open(input_image_path) as img:
    resized_img = img.resize((1024, 500))
    resized_img.save(output_image_path)

print("Image redimensionnée et sauvegardée sous 'iconePasapa512.png'")
