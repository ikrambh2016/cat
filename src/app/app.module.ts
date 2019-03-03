import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatService } from './services/cat.service';
import { StorageService } from './services/storage.service';

import { AppComponent } from './app.component';
import { VoteComponent } from './pages/vote/vote.component';
import { ResultComponent } from './pages/result/result.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'vote', pathMatch: 'full' },
  { path: 'vote', component: VoteComponent },
  { path: 'result', component: ResultComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    ResultComponent
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
