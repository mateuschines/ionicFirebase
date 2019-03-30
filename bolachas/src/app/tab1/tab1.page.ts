import { Component, OnInit } from '@angular/core';
import { BolachasService } from '../bolachas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  dadosPagina=[];

  constructor(private service:BolachasService) {
    
  }

  ngOnInit(): void {
    
    this.atualizar();
  }

  atualizar(){
    this.service.carregaDados(()=>this.dadosPagina = this.service.dados);
  }
}
