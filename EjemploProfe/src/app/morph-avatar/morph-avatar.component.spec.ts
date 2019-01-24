import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphAvatarComponent } from './morph-avatar.component';

describe('MorphAvatarComponent', () => {
  let component: MorphAvatarComponent;
  let fixture: ComponentFixture<MorphAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
