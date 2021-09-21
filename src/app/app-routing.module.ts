import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';


const routes: Routes = [
  {
    path: 'app-registro-contrato',
    component: RegistroContratoComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
