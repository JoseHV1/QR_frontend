import { Component } from '@angular/core';
import { InputComponent } from '../form/input/input.component';
import { ButtonComponent } from '../form/button/button.component';
import { ImageComponent } from '../image/image.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ResponseModel } from '../../models/response.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ImageComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  image_qr: string = 'assets/images/qr_code.png';
  form!: FormGroup;

  constructor(private _api: ApiService) {
    this.form = new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ]),
    });
  }

  sendUrl() {
    this._api.generateQr(this.form.value).subscribe((resp: ResponseModel) => {
      this.image_qr = resp.image;
    });
  }
}
