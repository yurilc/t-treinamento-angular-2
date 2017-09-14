import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onPageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changePage(pagina: string) {
    this.onPageChange.emit(pagina);
  }

}
