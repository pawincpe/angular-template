import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: Array<BreadcrumbItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface BreadcrumbItem {
  name: string;
  path?: string;
}
