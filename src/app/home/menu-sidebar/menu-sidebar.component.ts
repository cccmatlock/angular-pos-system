import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
})
export class MenuSidebarComponent {
  sidebarVisible: boolean = false;
}
