import { Injectable, TemplateRef } from '@angular/core';
import { MyLazyModule } from './my-lazy.module';

@Injectable({ providedIn: MyLazyModule })
export class ExerciseToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
