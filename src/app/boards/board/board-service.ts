import { Injectable, signal } from "@angular/core";
import { Board, Task } from "@classes/board";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    private board = signal<Board>(new Board(uuidv4(), 'Default Board', 'This is a default board', [
        new Task(uuidv4(), 'Sample Task', 'This is a sample task')
    ]));

    addTask(title: string, description: string = ""): void {
        const newTask = new Task(uuidv4(), title, description);
        this.board().tasks.push(newTask);
        this.board.set(this.board());
    }

    removeTask(id: string): void {
        const currentBoard = this.board();
        const updatedTasks = currentBoard.tasks.filter(task => task.id !== id);
        this.board.set(Board.clone(currentBoard, updatedTasks));
    }

    get getBoard(): Board {
        return this.board();
    }
}