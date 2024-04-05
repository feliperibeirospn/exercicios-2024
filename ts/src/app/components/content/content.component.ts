import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  informacaoExibida: string = "Informações iniciais";
  mostrarPrimeiroContainer: boolean = true;
  mostrarInformacoes: boolean = false; // Adiciona essa linha

  toggleInformacao() {
    this.mostrarPrimeiroContainer = !this.mostrarPrimeiroContainer;
  }
}
