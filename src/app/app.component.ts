import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RedirectButtonComponent } from './shared/components/redirect-button/redirect-button.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { RecomendacoesComponent } from './components/recomendacoes/recomendacoes.component';
import { BandeirasComponent } from './components/bandeiras/bandeiras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InicioComponent,
    RedirectButtonComponent,
    SobreComponent,
    RecomendacoesComponent,
    BandeirasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
