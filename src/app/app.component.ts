import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './shared/reusable/navbar/navbar.component';
import { ContactFooterComponent } from './shared/reusable/contact-footer/contact-footer.component';
import { FooterComponent } from "./shared/reusable/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContactFooterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thapa-EduHub-Angular';
}
