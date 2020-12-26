import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsComponent } from './image-details.component';
import { MatCardModule } from '@angular/material/card';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailsComponent;
  let fixture: ComponentFixture<ImageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  'declarations': [ ImageDetailsComponent ],
	  'imports': [
			MatCardModule
		]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
