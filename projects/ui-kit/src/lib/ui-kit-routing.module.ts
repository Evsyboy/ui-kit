import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIKitSummaryComponent } from './ui-kit-summary.component';

const routers: Routes = [
  {
    path: '',
    component: UIKitSummaryComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class UIKitRoutingModule {}
