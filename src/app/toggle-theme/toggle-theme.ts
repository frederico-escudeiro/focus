import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-toggle-theme',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './toggle-theme.html',
    styleUrl: './toggle-theme.scss',
})
export class ToggleThemeComponent {

    isDark: boolean = false;

    toggleTheme() {
        this.isDark = !this.isDark;
        return;
    }
}