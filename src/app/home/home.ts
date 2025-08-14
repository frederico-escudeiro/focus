import { Component } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
    selector: 'app-home',
    imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home {

    menuItems = [
        { title: 'Boards', description: 'Manage your boards and projects', route: '/focus' },
        { title: 'Profile', description: 'Access and edit your Profile', route: '/settings' }
    ];
}