import { Component } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import { Menu, Modes as SidebarModes, UnAuthorizedVisibility } from 'angular-sidebar-menu';
import { Roles } from './shared/enum/roles.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AssestManagement';
  roles = Roles;
  currentRole = Roles.ADMIN;
  sidebarMode = SidebarModes.EXPANDED;
  currentSearch?: string;
  inputSearchFocus = false;
  mainNavigationOpened = true;
  visibility:UnAuthorizedVisibility = 'hidden'
  menu = this.menuService.setMenu();

  constructor(public menuService: MenuService) {}
}
