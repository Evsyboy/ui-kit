import { NgModule } from '@angular/core';
import { UiKitComponent } from './ui-kit.component';
import { UiKitRoutingModule } from './ui-kit-routing.module';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiInputModule } from './ui-input/ui-input.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [UiKitComponent],
  imports: [UiInputModule, UiKitRoutingModule],
  exports: [UiInputModule],
})
export class UiKitModule {}
