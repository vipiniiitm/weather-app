import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  name:string;
  submitted= false;
  weatherDescriptions;
  constructor(private apiService: ApiService,  private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['', Validators.required]
    });

    
  }
  onSubmit(form:NgForm) {
    this.submitted=true;
    this.name=this.weatherSearchForm.get('location').value;
    this.apiService.getWeather(this.name).subscribe(res=>{
    console.log(res);
    this.weatherData=res;
    this.weatherDescriptions= this.weatherData.current.weather_descriptions[0];
    },err=>{
      console.log(err.error.info)
    })
    
  }
 
}
