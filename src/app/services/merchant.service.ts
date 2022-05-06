import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api-constants';
import { Product } from '../models/product';
import { transactionObject } from '../models/transaction-object';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  /**
   * @author Soul Merchant
   * 2022
   * getListOfProducts
   * returns a list of movies
   * 
   */
  public getListOfProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ApiConstants.merchantUrl + "rum/");
  }


  /**
   * @author Soul Merchant
   * 2022
   * vodacomBuyProduct
   */
  public vodacomBuyProduct(params: transactionObject) : Observable<any>{
    return this.http.post(ApiConstants.merchantUrl + "notales/", params)
  }

  
}
