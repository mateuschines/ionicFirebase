import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BolachasService {

 dados=[];

  constructor(private httpClient: HttpClient) { 
    
  }

  //calback é uma funcao que carrega os dados quando termina
  public carregaDados(callback) {

    //retorna um servel, vaia vaisando aos poucos o que esta caontecendo
    return this.httpClient.get(`https://alfa2019-alfa.firebaseio.com/bolachas.json`)
      .toPromise().then(response => {
        //retirna um obj json ou obj propriedade{} com um valor do firebase
        this.dados = [];//comeco um array vazio
        //converter as chaves em um array de objtos
        Object.keys(response).forEach(key => {//pego a response o cara com vareas chaves
          this.dados.push({//add um novo obj
            id: key,
            nome: response[key].nome,
            nota: response[key].nota
          });
          callback();//avisando o front
        });
      }).catch(
        error => console.log("ERROR", error)
      );
}
}
