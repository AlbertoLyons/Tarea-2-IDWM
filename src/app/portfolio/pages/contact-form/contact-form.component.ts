import { Component} from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ContactFormBodyComponent } from '../../components/contact-form-body/contact-form-body.component';
@Component({
  selector: 'portfolio-contact-form',
  imports: [NavigationBarComponent,ContactFormBodyComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  constructor() { }
}
