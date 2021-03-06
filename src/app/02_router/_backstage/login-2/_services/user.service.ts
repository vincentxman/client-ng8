﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { BackstageLazyModule } from '../../backstage-lazy/backstage-lazy.module';

@Injectable({providedIn: BackstageLazyModule})
export class UserService {
  apiUrl = 'api';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`${this.apiUrl}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/users/` + id);
  }
}
