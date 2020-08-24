import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from '../operations/stats/stats.component';
import { OperationsComponent } from '../operations/operations.component';
import { DetailComponent } from '../operations/detail/detail.component';

// 11.  -- Ahora añadirlo en el app-routing.module
export const routesDashboard: Routes = [
  { path: 'stats' , component: StatsComponent } ,
  { path: 'operations' , component: OperationsComponent } ,
  { path: 'details' , component: DetailComponent } ,
  { path: '' , component: StatsComponent } ,
  { path: '**' , redirectTo: '' }
];

