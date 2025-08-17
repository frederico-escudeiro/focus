

export class Board {
    id: string;
    title: string;
    description: string;
    tasks: Task[];

    constructor(id: string, title: string, description: string, tasks: Task[] = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = tasks;
        //this.assignedUsers = [];
    }

    static clone(board: Board, tasks: Task[]): Board {
        return new Board(board.id, board.title, board.description, tasks);
    }
}

export class Task {
    id: string;
    title: string;
    description: string;

    constructor(id: string, title: string, description: string){
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

function uuidv4(): string {
    throw new Error("Function not implemented.");
}
    