import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog/blog-item-text/blog-item-text.component';
import { SummaryPipe } from './summary.pipe';
import {BlogItemImageComponent} from './components/blog/blog-item-image/blog-item-image.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
   component: QuizComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponentComponent,
    AppNavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    SummaryPipe,
    BlogItemImageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
