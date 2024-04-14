import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  informacaoExibida: string = "Informações iniciais";
  mostrarPrimeiroContainer: boolean = true;
  mostrarInformacoes: boolean = false; // Adiciona essa linha
  isExpandido: boolean = false;
  perguntas: any[] = [
    {
      assunto: 'Assunto da pergunta 1',
      autor: 'Autor 1',
      conteudo: 'Conteúdo da pergunta 1',
      likes: 5,
      respostas: 2
    },
    // Adicione mais perguntas conforme necessário
  ];

  toggleInformacao() {
    this.mostrarPrimeiroContainer = !this.mostrarPrimeiroContainer;
  }
  toggleExpandido() {
    this.isExpandido = !this.isExpandido;
  }

  expandirTopico(pergunta: any) {
    pergunta.expandido = !pergunta.expandido;
  }


}
