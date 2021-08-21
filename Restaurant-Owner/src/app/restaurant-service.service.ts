import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(
    private readonly httpClient:HttpClient
  ) { }

 async getAllBranchOrders(data:any):Promise<Observable<any>>{
    return this.httpClient.get(`http://localhost:3000/branch/orders/${data}`)
  }
  
}
