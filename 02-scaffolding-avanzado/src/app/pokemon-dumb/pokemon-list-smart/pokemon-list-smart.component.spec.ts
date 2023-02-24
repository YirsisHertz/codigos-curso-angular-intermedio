import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListSmartComponent } from './pokemon-list-smart.component';

describe('PokemonListSmartComponent', () => {
  let component: PokemonListSmartComponent;
  let fixture: ComponentFixture<PokemonListSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
