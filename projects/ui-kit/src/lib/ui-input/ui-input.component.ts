import { Component, OnChanges, OnInit, Optional, Self } from '@angular/core';
import { UiControlValueAccessorComponent } from '../ui-control-value-accessor/ui-control-value-accessor.component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.less'],
})
export class UiInputComponent
  extends UiControlValueAccessorComponent
  implements OnInit
{
  constructor(@Self() @Optional() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {
    super.ngOnInit();
    this.formControl.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
