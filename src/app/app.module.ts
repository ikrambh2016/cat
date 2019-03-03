import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatService } from './services/cat.service';
import { StorageService } from './services/storage.service';

import { AppComponent } from './app.component';
import { VoteComponent } from './pages/vote/vote.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'vote', pathMatch: 'full' },
  { path: 'vote', component: VoteComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [CatService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
