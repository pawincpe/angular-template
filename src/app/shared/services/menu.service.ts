import { Injectable } from '@angular/core';
import { Menu } from 'angular-sidebar-menu';
import { BehaviorSubject } from 'rxjs';
import { Roles } from '../enum/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }
  setMenu(): Menu {
    const menu: Menu = [
      {
        id: 'Menu',
        header: 'Menu',
      },
      {
        id: 'MULTILEVEL',
        label: 'Multi-Level',
        iconClasses: 'fa fa-share',
        roles: [],
        children: [
          {
            id: 'LEVEL_ONE-1',
            label: 'Level One',
            route: '/level-one',
            badges: [
              {
                label: '1',
                classes: 'badge--red',
              },
            ],
          },
          {
            id: 'LEVEL_ONE-2',
            label: 'Level One',
            children: [
              {
                id: 'LEVEL_TWO-1',
                label: 'Level Two',
                children: [
                  {
                    id: 'LEVEL_THREE-1-1',
                    label: 'Level Three',
                    route: '/level-three-1',
                  },
                  {
                    id: 'LEVEL_THREE-1-2',
                    label: 'Level Three',
                    route: '/level-three-2',
                  },
                  {
                    id: 'LEVEL_THREE-1-3',
                    label: 'Level Three',
                    route: '/level-three-3',
                  },
                ],
              },
              {
                id: 'LEVEL_TWO-2',
                label: 'Level Two',
                children: [
                  {
                    id: 'LEVEL_THREE-2-1',
                    label: 'Level Three',
                    route: '/level-three-2-1',
                  },
                  {
                    id: 'LEVEL_THREE-2-2',
                    label: 'Level Three',
                    route: '/level-three-2-2',
                  },
                  {
                    id: 'LEVEL_THREE-2-3',
                    label: 'Level Three',
                    route: '/level-three-2-3',
                  },
                ],
              },
              {
                id: 'LEVEL_TWO-3',
                label: 'Level Two',
                route: '/level-two-1',
              },
              {
                id: 'LEVEL_TWO-4',
                label: 'Level Two',
                route: '/level-two-2',
              },
            ],
          },
          {
            id: 'LEVEL_ONE-3',
            header: 'LEVEL_ONE_HEADER',
          },
          {
            id: 'LEVEL_ONE-4',
            label: 'Level One',
            route: '/level-one-2',
          },
        ],
      },
      {
        id: 'ROUTE_WITH_PARAMETERS',
        label: 'With Parameters',
        iconClasses: 'fa fa-sliders',
        children: [
          {
            id: 'ROUTE_ID',
            label: 'ROUTE_ID',
            children: [
              {
                id: 'ROUTE_ID-SUB_ROUTE_ID_ONE',
                label: 'Sub Role One',
                route: '/route-id/route-id-two/1',
              },
            ],
          },
          {
            id: 'ROUTE_ID_ONE',
            label: 'Route One',
            route: '/route-id-one/1',
          },
          {
            id: 'ROUTE_ID_TWO',
            label: 'Route Two',
            route: '/route-id-one/2',
          },
          {
            id: 'ROUTE_ID_THREE',
            label: 'Route Three',
            route: '/route-id-one/3',
          },
        ],
      },
      {
        id: 'ADMIN',
        label: 'Admin',
        iconClasses: 'fa fa-user-plus',
        route: 'admin',
        roles: [Roles.ADMIN],
        badges: [
          {
            label: 'admin',
            classes: 'badge--red',
          },
        ],
      },
      {
        id: 'ROLES',
        label: 'Roles',
        iconClasses: 'fa fa-lock',
        children: [
          {
            id: 'ROLES-ADMIN_AND_EDITOR',
            label: 'ADMIN_AND_EDITOR',
            route: '/roles/admin-editor',
            roles: [Roles.ADMIN, Roles.EDITOR],
          },
          {
            id: 'ROLES-ADMIN',
            label: 'Admin',
            route: '/roles/admin',
            roles: [Roles.ADMIN],
          },
          {
            id: 'ROLES-EDITOR',
            label: 'Editor',
            route: '/roles/editor',
            roles: [Roles.EDITOR],
          },
        ],
      },
      {
        id: 'CHILD_ROUTES',
        label: 'Child',
        iconClasses: 'fa fa-level-down',
        route: 'child-routes',
        linkActiveExact: false,
      },
      {
        id: 'BADGES',
        label: 'Badges',
        iconClasses: 'fa fa-star',
        route: 'badges',
        badges: [
          {
            label: 'new',
            classes: 'badge--red',
          },
          {
            label: '1',
            classes: 'badge--blue',
          },
        ],
      },
      {
        id: 'EXTERNAL_LINK',
        label: 'Link',
        iconClasses: 'fa fa-external-link',
        url: '//google.com',
      },
    ];
    return menu;
  }
}
