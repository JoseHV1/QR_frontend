import { Component } from '@angular/core';
import { InputComponent } from '../form/input/input.component';
import { ButtonComponent } from '../form/button/button.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  image_qr: string = 'assets/images/qr_code.png';
}
