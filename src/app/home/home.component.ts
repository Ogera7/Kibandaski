import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected property name
})
export class HomeComponent implements OnInit {
  foods: string[] = [];

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    this.foods = this.fs.getAll(); // Corrected to use the same name as in the HTML template
  }
}
