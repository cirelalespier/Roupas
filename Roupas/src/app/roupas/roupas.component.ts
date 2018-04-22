import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.css']
})
export class RoupasComponent implements OnInit {

  lista: boolean = true;

  roupas: string[] = ["Roupa","Roupa1","Roupa2","Roupa3","Roupa4","Roupa5"];

  titulo: string = "Blusa";

  descricao: string = "Com pequena barra de botões na frente e dobras nas mangas. Essa blusa confeccionada em..."

  descricaoCompleta: string = "Com pequena barra de botões na frente e dobras nas mangas. Essa blusa confeccionada em tecido de algodão tem a modelagem confortável, e cai muito bem com aquele seu jeans preferido. Seguir as instruções de lavação que estão na etiqueta do produto.";

  preco: number = 10.00;

  imagem: string = '../../assets/blusa.JPG'

  valor: number = 1;

  constructor() { }

  ngOnInit() {
  }

  MostrarDetalhe(){
    this.lista = false;
  }

  public Voltar(){
    this.lista =  true;
  }

  public Comprar(){
    alert("Sem estoque");
    this.Voltar();
  }

  public Decrementar() {
    this.valor--;
  }
  
  public Incrementar() {
    this.valor++;
  }
}
