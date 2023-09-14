import { Component } from '@angular/core';
import { Depoimento } from 'src/app/core/types/types';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss']
})
export class DepoimentoComponent {
  depoimentos: Depoimento[] =[];

  constructor(private service: DepoimentoService){
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
