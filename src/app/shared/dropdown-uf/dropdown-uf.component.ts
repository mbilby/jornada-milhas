import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
//import { UnidadeFederativa } from 'src/app/core/types/types';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  controlEstados = new FormControl('');
  unidadeFederativas: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {

  }
  ngOnInit() {
       this.alimentaLista();
       this.filteredOptions = this.controlEstados.valueChanges.pipe(
        startWith(''),
        map(value => this._filterEstados(value || '')),
         );
  }

  private alimentaLista() {
    this.unidadeFederativaService.listar()
       .subscribe(dados => {
           this.unidadeFederativas = dados.map(value => value.nome);
     });
  }

   private _filterEstados(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.unidadeFederativas.filter(option => option.toLowerCase().includes(filterValue));
   }
}
