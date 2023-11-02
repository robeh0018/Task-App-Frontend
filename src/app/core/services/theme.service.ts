import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public static default = 'light';
  private readonly style: HTMLLinkElement;


  /** ----------------------------------------------------------------------------------------*/

  constructor() {
    // Create a new link element to hold the style sheet
    this.style = document.createElement('link');

    // Set the rel attribute to 'stylesheet'
    this.style.rel = 'stylesheet';

    // Append the style element to the head of the document
    document.head.appendChild(this.style);
    // Apply the current theme
    this.applyTheme(this.getCurrent());
  }

  /** ----------------------------------------------------------------------------------------*/

  getCurrent(): string {
    // Retrieve the theme from local storage
    const currentTheme = localStorage.getItem('theme');

    // If no theme is found, use the default theme
    return currentTheme ?? ThemeService.default;
  }

  /** ----------------------------------------------------------------------------------------*/

  setCurrent(value: string): void {
    if (this.getCurrent() === value) return;

    localStorage.setItem('theme', value);
    this.applyTheme(value);
  }

  /** ----------------------------------------------------------------------------------------*/

  /**
   * Switches the theme between 'light' and 'dark'.
   */
  switchTheme(): void {
    // Check the current theme
    if (this.getCurrent() === 'light') {
      // Set the theme to 'dark'
      this.setCurrent('dark');
    } else {
      // Set the theme to 'light'
      this.setCurrent('light');
    }
  }

  /** ----------------------------------------------------------------------------------------*/

  private applyTheme(theme: string): void {
    // Update the href of the style element to point to the CSS file for the specified theme.
    this.style.href = `./${theme}.css`;
  }
}
