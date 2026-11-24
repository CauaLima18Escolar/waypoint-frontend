import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempoSemana } from './tempo-semana';

describe('TempoSemana', () => {
  let component: TempoSemana;
  let fixture: ComponentFixture<TempoSemana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempoSemana],
    }).compileComponents();

    fixture = TestBed.createComponent(TempoSemana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
