import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardDataModel } from '../../models/card-data.model';
import { CardDataService } from '../../services/card-data.service';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [CdkDropList, CdkDrag, MatCardModule, RouterModule],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
    allData: CardDataModel[] = [];
    inProgressData: CardDataModel[] = [];
    doneData: CardDataModel[] = [];
    constructor(
        private cardData: CardDataService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAllCardData();
    }

    getAllCardData() {
        return this.cardData.getCardData().subscribe((data: CardDataModel[]) => {
            console.log(data);
            this.allData = data;
        });
    }

    drop(event: CdkDragDrop<any[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    test(id: string) {
        this.router.navigate(['detail'], {
            queryParams: { id }
        });
    }
}
