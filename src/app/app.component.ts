import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  name = "naresh";
  displayName = false;
  color = "red";
  colors = ["red","blue","green"]
  items = [];
  //items=["Mac"];
  
}
