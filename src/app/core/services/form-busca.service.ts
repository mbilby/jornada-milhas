import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup;
  constructor(private dialog: MatDialog,) { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      tipo: new FormControl("Executiva"),
    })
  }
  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if(evento.selected){
      this.formBusca.patchValue({
        tipo,
      })
      console.log('tipo de passagem alterado para: ', tipo)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
