import { Component, inject } from "@angular/core";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home {

    router = inject(Router)

    menuItems = [
        { title: 'Boards', description: 'Manage your boards and projects', route: '/boards' },
        { title: 'Profile', description: 'Access and edit your Profile', route: '/settings' }
    ];

    navigateTo(item: { route: string }) {
        this.router.navigate([item.route]);
    }   
}