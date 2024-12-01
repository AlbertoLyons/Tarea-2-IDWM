import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'portfolio-send-button',
  imports: [CommonModule],
  templateUrl: './send-button.component.html',
  styleUrl: './send-button.component.css'
})
export class SendButtonComponent {
  buttonText: string = 'Enviar';
  timer: number = 3;
  togglePopup: boolean = false;

  constructor(private router: Router) {}
  sendForm() {
    this.timer = 3;
    this.buttonText = 'Enviando...';

    const interval = setInterval(() => {
      this.timer--;
      if (this.timer > 0) {
        this.buttonText = `Enviando` + '.'.repeat(this.timer);
      } else {
        this.buttonText = 'Enviado';
        this.showPopup();
        clearInterval(interval);
      }
    }, 1000);
  }
  showPopup() {
    this.togglePopup = true;
  }
  closePopup() {
    this.togglePopup = false;
    this.router.navigate(['/portfolio']);
  }
}
