import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContactenosPage } from './page-contactenos.page';

describe('PageContactenosPage', () => {
  let component: PageContactenosPage;
  let fixture: ComponentFixture<PageContactenosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageContactenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
