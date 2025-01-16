import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EnigmeComponent } from './enigme.component';  // Changed from CardComponent
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

describe('EnigmeComponent', () => {  // Changed from CardComponent
  let component: EnigmeComponent;  // Changed from CardComponent
  let fixture: ComponentFixture<EnigmeComponent>;  // Changed from CardComponent

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmeComponent],  // Changed from CardComponent
      imports: [IonicModule.forRoot(), IonButton, IonRouterLink, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(EnigmeComponent);  // Changed from CardComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});