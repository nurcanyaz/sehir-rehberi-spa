import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouteRoutes } from '../route.routing';







@NgModule({
  declarations: [
    LayoutComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouteRoutes
  ],
  exports:[
    LayoutComponent,
    RouteRoutes
       //dışarıdan erişilmesi için export edilmesi gerekiyor.
  ]
})
export class LayoutModule { }
