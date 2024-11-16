import { Component } from '@angular/core';

import { HeroComponent } from '../../shared/reusable/hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { WhyChooseComponent } from '../../shared/reusable/why-choose/why-choose.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ServicesComponent, WhyChooseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
