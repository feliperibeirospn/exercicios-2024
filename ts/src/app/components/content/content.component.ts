import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  informacaoExibida: string = "Informações iniciais";
  mostrarInformacoes: boolean = false;

  toggleInformacao() {
    this.mostrarInformacoes = !this.mostrarInformacoes;
    if (!this.mostrarInformacoes) {
      this.informacaoExibida = "Informações iniciais";
    } else {
      this.informacaoExibida = "Novas informações";
    }
  }

}
