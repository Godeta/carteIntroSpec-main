import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BrainComponent } from './brain.component';  // Changed from CardComponent
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

describe('BrainComponent', () => {  // Changed from CardComponent
  let component: BrainComponent;  // Changed from CardComponent
  let fixture: ComponentFixture<BrainComponent>;  // Changed from CardComponent

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BrainComponent],  // Changed from CardComponent
      imports: [IonicModule.forRoot(), IonButton, IonRouterLink, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(BrainComponent);  // Changed from CardComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});