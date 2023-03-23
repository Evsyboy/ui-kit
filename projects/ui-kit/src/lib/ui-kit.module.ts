import { NgModule } from '@angular/core';
import { UIKitSummaryComponent } from './ui-kit-summary.component';
import { UIKitRoutingModule } from './ui-kit-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UIInputModule } from './ui-input/ui-input.module';

@NgModule({
  declarations: [UIKitSummaryComponent],
  imports: [UIKitRoutingModule, UIInputModule, ReactiveFormsModule],
})
export class UIKitModule {}
