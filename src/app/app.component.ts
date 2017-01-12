import { TourDestinationService } from './shared/services/tourDestinations.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  constructor(private destinationService:TourDestinationService)
  {
    console.log(destinationService.getAll());
  }
}

 
