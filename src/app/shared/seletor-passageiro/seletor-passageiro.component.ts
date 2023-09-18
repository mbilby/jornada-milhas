import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{
  @Input() titulo: string = ''
  @Input() subTitulo: string = ''

  value: number = 0
  onChange = (value: number) => {}
  onTouch = () => {}

  writeValue(val: any): void {
    this.value = val
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  } 

  incrementar() {
    this.value += 1;
    this.onChange(this.value)
    this.onTouch()
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value)
      this.onTouch()
    }
    
  }
}
