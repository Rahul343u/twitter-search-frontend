import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwiterSearchComponent } from './core/components/twiter-search/twiter-search.component';

const routes: Routes = [
  { path: '', component: TwiterSearchComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
