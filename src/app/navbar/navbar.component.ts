import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navRight') navRight!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;

  private _menuExpand = false;

  constructor() {}

  expandHam() {
    if (!this._menuExpand) {
      this.navMenu.nativeElement.style.display = 'flex';
      this.navRight.nativeElement.style.display = 'flex';
      this._menuExpand = !this._menuExpand;
    } else {
      this.navMenu.nativeElement.style.display = 'none';
      this.navRight.nativeElement.style.display = 'none';
      this._menuExpand = !this._menuExpand;
    }
  }
}
