import { Component, Input, signal } from "@angular/core";
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

    @Input({required : true}) isDark!: ReturnType<typeof signal<boolean>>;

    toggleTheme() {
        this.isDark.update(x => !x);
        document.body.classList.toggle('dark-theme', this.isDark());
    }
}