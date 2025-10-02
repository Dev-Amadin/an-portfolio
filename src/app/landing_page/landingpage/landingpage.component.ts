import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from "../../about/about.component";
import { SkillsComponent } from "../../skills/skills.component";
import { ExperienceComponent } from "../../experience/experience.component";
import { ProjectsComponent } from "../../projects/projects.component";
import { ContactComponent } from "../../contact/contact.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
