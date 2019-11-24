import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let el: HTMLElement;
  let de: DebugElement
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
     imports: [ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid', async(() => {
    component.weatherSearchForm.controls['location'].setValue('');
    expect(component.weatherSearchForm.valid).toBeFalsy();
  }));
  it('form should be invalid', async(() => {
    component.weatherSearchForm.controls['location'].setValue('lucknow');
    expect(component.weatherSearchForm.valid).toBeTruthy();
  }));
  it('should call the onSubmit method', async(()=>{
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el= fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }))
});
