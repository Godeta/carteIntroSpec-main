import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CoupleComponent} from './couple.component';  // Changed from CardComponent
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

describe('CoupleComponent', () => {  // Changed from CardComponent
  let component: CoupleComponent;  // Changed from CardComponent
  let fixture: ComponentFixture<CoupleComponent>;  // Changed from CardComponent

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoupleComponent],  // Changed from CardComponent
      imports: [IonicModule.forRoot(), IonButton, IonRouterLink, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(CoupleComponent);  // Changed from CardComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});