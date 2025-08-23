import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { WarComponent } from './war.component';  // Changed from CardComponent
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

describe('WarComponent', () => {  // Changed from CardComponent
  let component: WarComponent;  // Changed from CardComponent
  let fixture: ComponentFixture<WarComponent>;  // Changed from CardComponent

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WarComponent],  // Changed from CardComponent
      imports: [IonicModule.forRoot(), IonButton, IonRouterLink, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(WarComponent);  // Changed from CardComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});