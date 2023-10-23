import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-c-parameterization',
  templateUrl: './new-c-parameterization.component.html',
  styleUrls: ['./new-c-parameterization.component.scss']
})
export class NewCParameterizationComponent implements OnInit {

  typesOfShoes: string[] = ['Painel Consolação', 'Painel Liberdade', 'Painel Tatuapé'];

  constructor() { }

  ngOnInit(): void {
  }

}
