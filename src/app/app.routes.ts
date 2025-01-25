import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-component/card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail', component: CardDetailComponent }
];
