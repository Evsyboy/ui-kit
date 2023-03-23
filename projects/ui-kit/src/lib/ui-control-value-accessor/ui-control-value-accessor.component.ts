import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  NgModel,
} from '@angular/forms';
import { Self } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({ selector: 'control-value-accessor' })
export class UiControlValueAccessorComponent
  implements ControlValueAccessor, OnInit
{
  @ViewChild(MatInput, { read: ElementRef, static: true })
  inputRef: ElementRef;

  onChange = (_: any) => {};
  onTouched = () => {};
  formControl: AbstractControl;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (!this.formControl) {
      this.formControl = this.ngControl && this.ngControl.control;
    }
    if (this.ngControl instanceof NgModel) {
      const input = this.inputRef.nativeElement;
      input.onchange = () => this.onInputChange();
      input.onkeyup = () => this.onInputChange();
    }
  }

  public onInputChange(): void {
    const input = this.inputRef.nativeElement;
    this.onChange(input.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {}
}
