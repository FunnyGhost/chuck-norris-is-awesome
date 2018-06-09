import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { JokeComponent } from 'src/app/joke-list/joke/joke.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [AppComponent, JokeComponent, JokeListComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, FormsModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
