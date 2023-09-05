import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './layout/components/components.module';
import { RouteRoutes } from './route.routing';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    RouteRoutes


  ],
  exports:[
    LayoutModule,
    ComponentsModule
  ]
})
export class AdminModule { }
