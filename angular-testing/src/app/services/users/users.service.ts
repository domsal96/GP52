import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type User = {
  id: string;
  name: string;
  role: string;
  pokemon: string;
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    { id: '1', name: 'Jane', role: 'Designer', pokemon: 'Blastoise' },
    { id: '2', name: 'Bob', role: 'Developer', pokemon: 'Charizard' },
    { id: '3', name: 'Jim', role: 'Developer', pokemon: 'Venusaur' },
    { id: '4', name: 'Adam', role: 'Designer', pokemon: 'Yoshi' }
  ];

  constructor() { }

  all(): Observable<User[]> {
    return of(this.users); // Returns the array of users as an observable
  }

  findOne(id: string): Observable<User | undefined> {
    const user = this.users.find((u: User) => u.id === id); // Finds the user by ID
    return of(user); // Returns the user as an observable
  }
}
