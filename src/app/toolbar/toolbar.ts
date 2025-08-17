import { Component, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ToggleTheme } from '@app/toggle-theme/toggle-theme';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbar,
    ToggleTheme,

  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
}
