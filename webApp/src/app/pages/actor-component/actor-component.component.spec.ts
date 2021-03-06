import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorComponent } from './actor-component.component';

describe('ActorComponentComponent', () => {
  let component: ActorComponent;
  let fixture: ComponentFixture<ActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
