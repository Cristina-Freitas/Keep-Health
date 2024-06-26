import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  getAddress(cep:string){
    const url = `https://viacep.com.br/ws/${cep}/json`;
    return this.httpClient.get(url);
  }
}
