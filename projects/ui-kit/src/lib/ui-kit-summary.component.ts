import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ui-kit',
  templateUrl: 'ui-kit-summary.component.html',
})
export class UIKitSummaryComponent {
  form = this.fb.group({
    p: '',
  });

  constructor(private fb: FormBuilder) {}
}
