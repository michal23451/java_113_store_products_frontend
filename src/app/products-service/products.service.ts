import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApplicationUser } from '../application-users-service/application-users-service';
import { ApplicationUsersComponent } from '../application-users/application-users.component';

export enum ProductState {
  NEW = "BRAND_NEW",
  USED = "USED"
}

export type Product = {
  id: number|null,
  productName: string,
  productState: ProductState,
  productOwner: ApplicationUser[]|null
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Product[] = []
  loadingList: boolean = false;

  constructor(private http: HttpClient) { }

  public refreshProductList(): void {
    this.loadingList = true;

    this.http.get('http://localhost:8080/api/products')
      .subscribe((data) => { // promise
        this.loadingList = false
        console.log(data)

        let receivedProductList = data as Product[];
        this.productList = receivedProductList;
      })
  }

  public getDefautProductModel(): Product {
    return {
      id: null,
      productName: '',
      productState: ProductState.NEW,
      productOwner: null
    }
  }

  public sendProductToBackend(product: Product): Observable<Object>{
    console.log('sendProductToBackend' + product)
    return this.http.post('http://localhost:8080/api/products', product);
  }

  public deleteFromBackend(productId: number): Observable<Object>{
    return this.http.delete('http://localhost:8080/api/products/'+productId)
  }
}
