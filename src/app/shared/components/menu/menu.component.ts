import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/service/menu.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.menuService.getMenu().subscribe((menu: Menu) => {
      this.menu = menu;
      console.log(this.menu);
    });
  }

}
