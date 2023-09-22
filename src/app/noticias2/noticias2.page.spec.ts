import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticias2Page } from './noticias2.page';

describe('Noticias2Page', () => {
  let component: Noticias2Page;
  let fixture: ComponentFixture<Noticias2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Noticias2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
