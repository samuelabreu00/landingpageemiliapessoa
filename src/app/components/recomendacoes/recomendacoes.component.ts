import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-recomendacoes',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TruncatePipe],
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecomendacoesComponent {

  screenWidth: number = 0;

  // Injeção do PLATFORM_ID para verificar o ambiente
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica se está no navegador e define a largura da tela
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
    }
  }

  listPropostas = [
    {
      title: 'SAÚDE ITINERANTE',
      description: 'O projeto proporcionará consultas em casa com equipes de profissionais multidisciplinares, para atender demandas em comunidades que não têm postos de saúde. ',
    },
    {
      title: 'MUTIRÃO DA SAÚDE',
      description: 'Serão realizados mutirões de atendimento especializado e cirurgias, com base no Programa Nacional de Redução de Cirurgias Eletivas, além de um mutirão de consultas com neurologistas e psiquiatras.',
    },
    {
      title: 'HOSPITAL DA MULHER',
      description: 'Será implantado um hospital especializado com todos os serviços essenciais para a saúde da mulher, com equipamentos para realização de exames preventivos e de diagnóstico de imagens.',
    },
    {
      title: 'CENTRO ESPECIALIZADO',
      description: 'Atendimento e acompanhamento de pessoas com Transtorno do Espectro Autista (TEA) e outros transtornos de desenvolvimento.',
    },
    {
      title: 'CRECHE NO MEU BAIRRO',
      description: 'Com atividades de tempo integral, a Creche no Meu Bairro visa educação em tempo integral e cria condições para que mães possam se capacitar, trabalhar ou empreender, ajudando a sustentar suas famílias.',
    },
    {
      title: 'BEM MORAR',
      description: 'Será criado um programa que disponibilizará recursos para reformar residências de famílias de baixa renda.',
    },
    {
      title: 'UNIVERSIDADE OPERÁRIA',
      description: 'O projeto oferece uma bolsa de incentivo para capacitar e remunerar a população, permitindo que completem seus estudos em um horário e se especializem em áreas específicas no restante do tempo para atender às necessidades do município.',
    },
    {
      title: 'POLO INDUSTRIAL DE CAUCAIA',
      description: 'Será implantado um Centro de Desenvolvimento Econômico, de forma que empregos sejam gerados e a renda da população cresça.',
    },
    {
      title: 'CISMEC',
      description: 'Será criada a Central de Inteligência, Segurança e Monitoramento Estratégico de Caucaia, que utilizará tecnologia avançada para promover a colaboração entre forças de segurança e defesa social, visando controlar e reduzir a violência.',
    },
  ]

  breakpoints = {
    1400: { slidesPerView: 3 },
    1000: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
    400: { slidesPerView: 1 },
    350: { slidesPerView: 1 },
    200: { slidesPerView: 1 }
  };
}
