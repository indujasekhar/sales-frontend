import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailybookComponent } from './dailybook/dailybook.component';
import {SalesRoutingModule} from './sales-routing.module';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
 } from '@coreui/angular';


@NgModule({
  declarations: [
    DailybookComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,    
    DocsComponentsModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
