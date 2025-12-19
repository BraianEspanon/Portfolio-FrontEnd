import { Component } from '@angular/core';
import { FooterBarComponent } from './components/footer/footer-bar/footer-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './components/header/header-bar/header-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [FooterBarComponent, RouterOutlet, HeaderBarComponent]
})
export class AppComponent {
  title = 'Portfolio';
  isLoading: boolean = true;
}
