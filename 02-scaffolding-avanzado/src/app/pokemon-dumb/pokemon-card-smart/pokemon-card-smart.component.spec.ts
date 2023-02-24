import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardSmartComponent } from './pokemon-card-smart.component';

describe('PokemonCardSmartComponent', () => {
  let component: PokemonCardSmartComponent;
  let fixture: ComponentFixture<PokemonCardSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
