import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticias1Page } from './noticias1.page';

describe('Noticias1Page', () => {
  let component: Noticias1Page;
  let fixture: ComponentFixture<Noticias1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Noticias1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
