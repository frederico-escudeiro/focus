import { Injectable, signal } from "@angular/core";
import { Board, Task } from "@classes/board";

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    private board = signal<Board>(new Board('default', 'Default Board', 'This is a default board'));
}