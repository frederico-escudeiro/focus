export class Board {
    id: string;
    title: string;
    description: string;
    tasks: Task[];
    //assignedUsers: User[];

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = [];
        //this.assignedUsers = [];
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
    