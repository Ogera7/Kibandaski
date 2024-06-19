import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/food-1.jpeg',
      '/assets/food-2.jpeg',
      '/assets/food-3.jpeg',
      '/assets/food-4.jpeg',
      '/assets/food-5.jpeg',
      '/assets/food-6.jpeg',
      '/assets/food-7.jpeg',
      '/assets/food-8.jpeg',
      '/assets/food-9.jpeg'
    ];
  }
}
