import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BolachasService {

 dados=[];

  constructor() { 
    setTimeout(()=>this.carregaDados(),1000);
  }

  public carregaDados(){
    this.dados= [
      {
        nome:"falso2",
        nota:1,
        id:1
      },
      {
        nome:"falso3",
        nota:1,
        id:1
      },
      {
        nome:"falso4",
        nota:1,
        id:1
      }
    ]
  }
}
