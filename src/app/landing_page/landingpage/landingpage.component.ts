import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from "../../about/about.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
