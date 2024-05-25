import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css',
})
export class CepComponent {
  public title = 'angular-base-v17';
  public buscaCep: any;
  public urlCep: string = 'https://viacep.com.br/ws/';
  public urlResto: string = '/json/';
  public cep: string = '';
  public finalCep: string = '';

  

  constructor(private http: HttpClient) {}
  calcular(valor: string) {
    if (this.cep == '') {
      alert('cep invalido');
    }
  
  else{

    this.finalCep = `${this.urlCep}${this.cep}${this.urlResto}`;
    this.http.get<any>(this.finalCep).subscribe((data) => {
      this.buscaCep = data;
    });
  }
  }
}
