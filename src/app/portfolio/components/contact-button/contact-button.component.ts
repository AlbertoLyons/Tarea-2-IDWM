import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'portfolio-contact-button',
  imports: [],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.css'
})
export class ContactButtonComponent {
  constructor(private router: Router) { }
  goToForm()
  {
    this.router.navigate(['/portfolio/contact']);
  }
}
