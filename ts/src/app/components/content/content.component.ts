import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Pergunta {
  assunto: string;
  autor: string;
  conteudo: string;
  likes: number;
  respostas: number;
  mostrarComentarios?: boolean; // A interrogação torna esta propriedade opcional
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  @ViewChild('formRef') formRef!: NgForm;
  informacaoExibida: string = "Informações iniciais";
  mostrarPrimeiroContainer: boolean = true;
  mostrarInformacoes: boolean = false; // Adiciona essa linha
  isExpandido: boolean = false;
  expandido: boolean = false;
  perguntas: any[] = [
    {
      assunto: 'Assunto da pergunta',
      autor: 'Autor',
      conteudo: 'Conteúdo da pergunta',
      likes: 5,
      respostas: 2,
      coautor:'Carlos Henrique Santos',
      comentario:'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },

    // Adicione mais perguntas conforme necessário
  ]

  toggleInformacao() {
    this.mostrarPrimeiroContainer = !this.mostrarPrimeiroContainer;
  }
  toggleExpandido() {
    this.isExpandido = !this.isExpandido;
  }

  expandirTopico(pergunta: any) {
    pergunta.expandido = !pergunta.expandido;
  }
  mostrarComentarios(pergunta: Pergunta) {
    // Define a propriedade mostrarComentarios da pergunta para true
    pergunta.mostrarComentarios = true;

    // Você pode adicionar aqui a lógica para carregar os comentários da pergunta
  }

  ocultarComentarios(pergunta: Pergunta) {
    // Define a propriedade mostrarComentarios da pergunta para false
     if(pergunta.mostrarComentarios == false){
       pergunta.mostrarComentarios = true;
     }

  }

  submitForm(): void {
    // Evitar o comportamento padrão de submissão do formulário
    // Você pode adicionar qualquer lógica adicional aqui
    console.log('Formulário enviado!');
  }

  enviarFormulario(event: MouseEvent): void {
    if (event) {
      event.preventDefault(); // Evitar o comportamento padrão de submissão do formulário
    }

    // Adicione aqui o código que você deseja executar quando o botão for clicado
    console.log('Botão de envio clicado!');

    // Esperar 4000ms (4 segundos) antes de recarregar a página
    setTimeout(function () {
      location.reload();
    }, 4000);
  }
}
