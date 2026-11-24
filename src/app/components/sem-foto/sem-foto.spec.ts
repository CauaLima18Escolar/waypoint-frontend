import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemFoto } from './sem-foto';

describe('SemFoto', () => {
  let component: SemFoto;
  let fixture: ComponentFixture<SemFoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemFoto],
    }).compileComponents();

    fixture = TestBed.createComponent(SemFoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
