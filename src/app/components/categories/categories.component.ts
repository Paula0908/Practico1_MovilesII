import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from 'src/app/services/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [CommonModule,IonicModule],
  standalone: true
})
export class CategoriesComponent  implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  categories:  string[] | null = null;
  ngOnInit() {
    this.store.getCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    });
  }
  openCategory(category: string) {
    this.router.navigate(['products', category]);
  }
}


