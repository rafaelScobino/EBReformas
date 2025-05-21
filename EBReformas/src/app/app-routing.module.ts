import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContatoMainPageComponent } from './contato/contato-main-page/contato-main-page.component';
import { LancamentosMainPageComponent } from './lancamentos/lancamentos-main-page/lancamentos-main-page.component';
import { ObrasMainPageComponent } from './obras/obras-main-page/obras-main-page.component';
import { ProjetosMainPageComponent } from './projetos/projetos-main-page/projetos-main-page.component';
import { ReformasMainPageComponent } from './reformas/reformas-main-page/reformas-main-page.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},

  {path:'contato', component:ContatoMainPageComponent},

  {path:'lancamentos', component:LancamentosMainPageComponent},

  {path:'obras', component:ObrasMainPageComponent},

  {path:'projetos', component:ProjetosMainPageComponent},

  {path:'reformas', component:ReformasMainPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
