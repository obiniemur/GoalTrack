import { Component } from '@angular/core';
import { CardsComponent } from './card-component/cards/cards.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CardsComponent, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'planYourGoal';
}
