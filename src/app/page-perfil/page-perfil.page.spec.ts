import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePerfilPage } from './page-perfil.page';

describe('PagePerfilPage', () => {
  let component: PagePerfilPage;
  let fixture: ComponentFixture<PagePerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagePerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
