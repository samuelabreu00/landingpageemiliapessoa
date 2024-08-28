import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 25, screenWidth = 400): string {
    // Checa a largura da tela e aplica a lógica de truncamento
    if (screenWidth <= 380 && value.length > 15) {
      return value.substring(0, 15) + '...';
    }
    // Para outras larguras da tela ou caso o texto seja pequeno o suficiente
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
