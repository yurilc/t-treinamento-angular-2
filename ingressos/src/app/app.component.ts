import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagina = 'venda-ingresso-list';

  changePage(pagina: string) {
    this.pagina = pagina;
  }
}
