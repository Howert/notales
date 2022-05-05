import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MerchantService } from 'src/app/services/merchant.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit, OnDestroy {

  constructor(
    private merchantService: MerchantService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.buyProductForm = new FormGroup({
      client : new FormControl('', [Validators.required, Validators.pattern("(255)[0-9]{9}"), Validators.maxLength(12), Validators.minLength(12)]),
      product : new FormControl('', [Validators.required])
    });


     this.products$ = this.merchantService.getListOfProducts().subscribe((response: Product[])=>{
      if (response && response.length > 0){        
        for (const product of response){
          let refinedProduct = {
            "name" : "",
            "uuid" : ""
          }
          refinedProduct.name = product.data + 'MB ' + product.voice + 'MIN ' + product.sms + 'SMS ' + product.validity + 'DAYS/' + product.price + 'Tshs ' + '--' + product.network;
          refinedProduct.uuid = product.uuid;
          this.products.push(refinedProduct);
        }
       
      }
    }, (error : HttpErrorResponse) =>{
      this.router.navigate(['/login']);
    });
    
  }

  ngOnDestroy(){
    this.products$.unsubscribe();
  }

  public products: any[];
  public buyProductForm;

  private products$: Subscription;

  onSubmit(){
    console.log('collecting data')
  }

}
