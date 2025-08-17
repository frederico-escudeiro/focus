import { Component, inject } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { BoardService } from "./board-service";

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
    board = inject(BoardService);
} 