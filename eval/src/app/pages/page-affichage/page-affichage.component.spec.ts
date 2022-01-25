import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffichageComponent } from './page-affichage.component';

describe('PageAffichageComponent', () => {
  let component: PageAffichageComponent;
  let fixture: ComponentFixture<PageAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAffichageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
