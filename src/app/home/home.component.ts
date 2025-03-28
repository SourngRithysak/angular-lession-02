import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*
    * title label
  */
  title: string = "Your Information"
  logo: string = "Angular-CRUD"
  /*
    * information
  */
  id: number = 1
  name: string = "Sourng Rithysak"
  age: number = 20
  email: string = "Sourngrithysak@gmail.com"
  mobile: string = "+855 96 9768 713"
}
