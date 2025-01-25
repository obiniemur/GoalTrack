import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { CardDataModel } from '../../models/card-data.model';
import { CardDataService } from '../../services/card-data.service';
import { CardDetailComponent } from '../card-detail/card-detail.component';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [CdkDropList, CdkDrag, MatCardModule, RouterModule, MatDialogModule],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
    allData: CardDataModel[] = [];
    inProgressData: CardDataModel[] = [];
    doneData: CardDataModel[] = [];
    readonly dialog = inject(MatDialog);

    constructor(
        private cardData: CardDataService,
        private router: Router
        // private dialog: MatDialog
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

    openDialog(id: string) {
        // this.router.navigate(['detail'], {
        //     queryParams: { id }
        // });
        const dialogRef = this.dialog.open(CardDetailComponent, {
            width: '900px',
            height: '900px',
            panelClass: 'my-centered-dialog',
            data: { id } // <== this is it
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
}
