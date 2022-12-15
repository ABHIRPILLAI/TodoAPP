import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwComponent } from './veiw.component';

describe('VeiwComponent', () => {
  let component: VeiwComponent;
  let fixture: ComponentFixture<VeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
