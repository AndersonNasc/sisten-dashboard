import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = [];
  perfilAdmin:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.perfilAdmin = (sessionStorage.getItem('perfil') == "admin" ? true : false);
  }


}
