import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Store } from 'src/app/services/store';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [CommonModule,IonicModule]
})
export class DetailComponent  implements OnInit {
  private store = inject(Store);
  private routeActivated = inject(ActivatedRoute);
  producto: Product | null = null
  
  ngOnInit() {
    const id = this.routeActivated.snapshot.paramMap.get('id');
    if (id) {
      const productId = parseInt(id);
      this.store.getProduct(productId).subscribe((product) => {
        console.log(product);
        this.producto = product;
      });
    }
  }
  onImgError(event: Event) {
    console.log(this.producto)
    const element = event.target as HTMLImageElement;
    element.src = "https://placehold.co/100x100?text=Img"; // Imagen de reemplazo :D
  }
}
