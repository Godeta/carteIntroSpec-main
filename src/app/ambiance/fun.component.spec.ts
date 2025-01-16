import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FunComponent } from './fun.component';  // Changed from CardComponent
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

describe('FunComponent', () => {  // Changed from CardComponent
  let component: FunComponent;  // Changed from CardComponent
  let fixture: ComponentFixture<FunComponent>;  // Changed from CardComponent

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FunComponent],  // Changed from CardComponent
      imports: [IonicModule.forRoot(), IonButton, IonRouterLink, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(FunComponent);  // Changed from CardComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});