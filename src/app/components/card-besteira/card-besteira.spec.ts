import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBesteira } from './card-besteira';

describe('CardBesteira', () => {
  let component: CardBesteira;
  let fixture: ComponentFixture<CardBesteira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBesteira],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBesteira);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
