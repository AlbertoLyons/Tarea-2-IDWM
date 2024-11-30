import { Component } from '@angular/core';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { AlbertoComponent } from '../alberto/alberto.component';
import { BodyTextComponent } from '../body-text/body-text.component';
@Component({
  selector: 'portfolio-body',
  imports: [ContactButtonComponent, AlbertoComponent, BodyTextComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
