import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BuscaCepService } from './busca-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cep! : string;

  listaCep:any[] = [];

  constructor(
    private buscarCepService: BuscaCepService,
    private el: ElementRef
  ){

  }

  ngOnInit(): void {
    (
      window.document.querySelector('#cep') as
      HTMLInputElement
    ).focus();
  }

  buscarCep(){

    this.buscarCepService.buscar(this.cep).subscribe( (data:any) => {

      console.log(data); //aqui podemos ver detalhes do objeto de retorno do console

      let filtro = this.listaCep.filter(
        o => (o.cep == data.cep) //filtra da lista objetos com mesmo cep
      );

      if(filtro.length==0) //Aqui podemos verificar se já existe o objeto na lista
        this.listaCep.push(data);

      this.cep = ''; //limpa campo

    });

  }

}
