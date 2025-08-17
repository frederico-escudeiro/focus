import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToggleThemeService {
    private isDarkSig = signal<boolean>(false);

    toggleTheme(): void {
        const isCurrentlyDark: boolean = this.isDarkSig();
        this.isDarkSig.set(!isCurrentlyDark);
        document.documentElement.classList.toggle('dark-theme', !isCurrentlyDark);
    }

    get isDark(): boolean {
        return this.isDarkSig();
    }
}