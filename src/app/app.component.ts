import { Component, ViewEncapsulation } from '@angular/core';
import { TokenStorageService } from './-services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showAdminControlBoard = false
  username?: string;
  constructor(private tokenStorageService: TokenStorageService){}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      

      this.username = user.username;
  }
}
logout(): void {
  this.tokenStorageService.signOut();
  window.location.reload();
}
productList = [
  {name: 'Z900', price: 8799},
  {name: 'shubert helmet', price: 999},
  {name: 'sport gloves', price: 99}
 ];
cartProductList = [];

addProductToCart(product) {
  const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
  if (!productExistInCart) {
    this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
    return;
  }
  productExistInCart.num += 1;
}
 removeProduct(product) {
  this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
 }
}

