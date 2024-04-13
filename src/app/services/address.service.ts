import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  getAddress(cep:string = ''){
    let url = 'https://viacep.com.br/ws/';
    let headers = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.httpClient.get(`${url}/${cep}/json`, headers);
  }
}
