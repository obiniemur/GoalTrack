import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CardDataService } from '../../services/card-data.service';
import { CardDataModel } from '../../models/card-data.model';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-card-detail',
    standalone: true,
    imports: [MatDialogModule, MatCardModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card-detail.component.html',
    styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit {
    cardId!: string;
    card!: CardDataModel;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private cardService: CardDataService
    ) {
        this.cardId = data.id;
    }
    ngOnInit(): void {
        this.getCardById();
    }

    getCardById() {
        this.cardService.getCardData().subscribe((data: CardDataModel[]) => {
            console.log('data', data);
            const filterData = data.find((d: CardDataModel) => d.goalId === this.cardId);
            console.log('filter', filterData);
            this.card = filterData!;
            console.log('card', this.card);
        });
    }
}
