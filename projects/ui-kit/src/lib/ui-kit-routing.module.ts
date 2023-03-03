import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiKitComponent } from './ui-kit.component';

const routers: Routes = [
  {
    path: '',
    component: UiKitComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class UiKitRoutingModule {}
