import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComFoto } from './card-com-foto';

describe('CardComFoto', () => {
  let component: CardComFoto;
  let fixture: ComponentFixture<CardComFoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComFoto],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComFoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
