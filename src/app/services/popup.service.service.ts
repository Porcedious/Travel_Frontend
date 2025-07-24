import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  constructor() { }

  openPopup(): void {
    this.isOpenSubject.next(true);
  }

  closePopup(): void {
    this.isOpenSubject.next(false);
  }

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }
}
