import { Component } from '@angular/core';
import { SideNavItem } from '../models/models';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      title: 'dashboard',
      link: 'dashboard',
      
    },
    {
      title: 'view books',
      link: 'books/library',
      
    },
    {
      title: 'manage books',
      link: 'books/maintenance',
    },
    {
      title: 'manage categories',
      link: 'books/categories',
    },
    {
      title: 'return book',
      link: 'books/return',
    },
    {
      title: 'view users',
      link: 'users/list',
    },
    {
      title: 'all orders',
      link: 'users/all-orders',
    },
    {
      title: 'my orders',
      link: 'users/order',
    },
  ];
}
