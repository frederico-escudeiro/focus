import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ToggleThemeService } from "./toggle-theme-service";

@Component({
    selector: 'app-toggle-theme',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './toggle-theme.html',
    styleUrl: './toggle-theme.scss',
})
export class ToggleTheme {
    toggleThemeService = inject(ToggleThemeService)

    toggleTheme() {
        this.toggleThemeService.toggleTheme();
    }

    get isDark() {
        return this.toggleThemeService.isDark;
    }   
}