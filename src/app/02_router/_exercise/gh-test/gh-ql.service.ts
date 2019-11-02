import { Injectable } from '@angular/core';
import { GhQlLazyModule } from '../gh-codegen/gh-ql-lazy.module';

@Injectable({
  providedIn: GhQlLazyModule
})
export class GhQLService {

  constructor() { }
}
