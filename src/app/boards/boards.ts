import { Component, inject } from "@angular/core";
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { Board } from "@classes/board";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-boards',
    templateUrl: './boards.html',
    styleUrls: ['./boards.scss'],
    imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatButton
]
})
export class Boards {
    router = inject(Router);
    boards = [
        new Board(uuidv4(), 'Project Alpha', 'Description for Project Alpha'),
    ]

    createBoard() {
        const newBoard = new Board(uuidv4(), 'New Board', 'Description for New Board');
        this.boards.push(newBoard);
        this.navigateTo(newBoard);
    }

    navigateTo(board: Board) {
        this.router.navigate(['/boards', board.id]);
    }

} 
