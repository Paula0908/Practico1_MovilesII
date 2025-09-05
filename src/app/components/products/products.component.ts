import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/services/store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [CommonModule,IonicModule],
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {
  private routeActivated = inject(ActivatedRoute);
  private store = inject(Store);
  private route = inject(Router)
  categoria: string | null = null;
  productos: Product[] = [];
  linkArreglado: string = "";

  ngOnInit() {
    const category = this.routeActivated.snapshot.paramMap.get('category');
    this.categoria = category;
    if (category) {
      this.store.getProductsByCategory(category).subscribe((products) => {
        console.log(products);
        this.productos = products;
        this.arreglarLinkImagen();
      });
    }
  }
  verDetalle(id: number) {
    this.route.navigate(['detail', id]);
  }
  arreglarLinkImagen(){ 
    /* 
    Saca los links de img desde el 
    producto especifico(como en detail), 
    no de la lista, parece que tan rotos esos links :p
    */
    for (let producto of this.productos) {
      this.store.getProduct(producto.id).subscribe(prod => {
          this.linkArreglado = prod.image;
          producto.image = this.linkArreglado;
      });
    }
  }
onImgError(event: Event) {
  const element = event.target as HTMLImageElement;
  element.src = "https://placehold.co/50x50?text=Img"; // Imagen de reemplazo :D
}
}
