import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyangular';
   loadedFeature ='recipe' //it came from header component html file
  onNavigate(feature:string){
   
     this.loadedFeature = feature;
  }
}
