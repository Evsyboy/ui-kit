import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiControlValueAccessorComponent } from '../ui-control-value-accessor/ui-control-value-accessor.component';
import { MatInputModule } from '@angular/material/input';
import { UiInputComponent } from './ui-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UiControlValueAccessorModule } from '../ui-control-value-accessor/ui-control-value-accessor.module';

@NgModule({
  declarations: [UiInputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    UiControlValueAccessorModule,
  ],
  exports: [UiInputComponent],
})
export class UIInputModule {}
