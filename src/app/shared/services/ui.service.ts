import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private alert: Subject<boolean> = new Subject<boolean>();
  public readonly alert$: Observable<boolean> = this.alert.asObservable();

  showAlert(): void {
    this.alert.next(true);
  }

  hideAlert(): void {
    this.alert.next(false);
  }
}
