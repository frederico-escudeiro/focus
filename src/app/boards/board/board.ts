import { Component, inject } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardActions } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { BoardService } from "./board-service";


@Component({
    selector: 'app-board',
    templateUrl: './board.html',
    styleUrls: ['./board.scss'],
    imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton
]
})
export class Board {
    private boardService = inject(BoardService);
    private board = this.boardService.getBoard;

    addTask(title: string = "New Task", description: string = ""): void {
        this.boardService.addTask(title, description);
    }

    get getBoard() {
        return this.board;
    }

} 