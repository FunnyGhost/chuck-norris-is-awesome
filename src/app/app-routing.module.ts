import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [
  {
    path: '',
    component: JokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
