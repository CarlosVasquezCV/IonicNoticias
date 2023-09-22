import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticias0Page } from './noticias0.page';

describe('Noticias0Page', () => {
  let component: Noticias0Page;
  let fixture: ComponentFixture<Noticias0Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Noticias0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
