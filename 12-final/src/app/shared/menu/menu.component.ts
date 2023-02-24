import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About',
        icon: 'pi pi-user',
        routerLink: '/about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-github',
        routerLink: '/projects',
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
        routerLink: '/skills',
      },
    ];
  }
}
