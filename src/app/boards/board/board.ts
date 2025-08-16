import { Component } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";

@Component({
    selector: 'app-board',
    templateUrl: './board.html',
    styleUrls: ['./board.scss'],
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent
    ]
})
export class Board {
    tasks = [
        { id: '1', title: 'Task 1', description: 'Description for Task 1' },
        { id: '2', title: 'Task 2', description: 'Description for Task 2' },
        { id: '3', title: 'Task 3', description: 'Description for Task 3' }
    ]
} 