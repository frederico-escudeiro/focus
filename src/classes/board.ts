export class Board {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    //tasks: Task[];
    //assignedUsers: User[];

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        //this.tasks = [];
        //this.assignedUsers = [];
    }
}
    