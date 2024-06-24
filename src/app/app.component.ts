import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './shared/components/alert/alert.component';
import { Subject, takeUntil } from 'rxjs';
import { UiService } from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  destroy$ = new Subject<void>();
  isVisible: boolean = false;

  constructor(private _ui: UiService) {
    this._ui.alert$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: boolean) => (this.isVisible = res));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
