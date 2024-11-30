import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { BodyComponent } from '../../components/body/body.component';
@Component({
  selector: 'portfolio-homepage',
  imports: [NavigationBarComponent, BodyComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
