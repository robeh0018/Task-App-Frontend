import {Component} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

/** Ngb Bootstrap imports. */
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

/** Core imports. */
import {ThemeService} from "../../../core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgbCollapse,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Menu collapsed state.
  isMenuCollapsed: boolean = true;

  /** ------------------------------------------------------------------------------ */

  constructor(public themeService: ThemeService) {
  }

  /** ------------------------------------------------------------------------------ */

  onSwitchTheme(): void {
    this.themeService.switchTheme();
  }
}
