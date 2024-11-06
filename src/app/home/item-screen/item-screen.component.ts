import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-item-screen',
  standalone: true,
  imports: [TabViewModule, BadgeModule, AvatarModule],
  templateUrl: './item-screen.component.html',
  styleUrl: './item-screen.component.scss',
})
export class ItemScreenComponent {}
