import { Component } from '@angular/core';
import { LayoutComponent } from '../shared/layouts/layout/layout.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [LayoutComponent, CardComponent],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})

export class GenerateComponent {}
