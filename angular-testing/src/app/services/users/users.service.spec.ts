import { TestBed } from '@angular/core/testing';
import { UsersService, User } from './users.service'; // Import User type
import { of } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse: User[] = [ // Use User type here
        { id: '1', name: 'Jane', role: 'Designer', pokemon: 'Blastoise' },
        { id: '2', name: 'Bob', role: 'Developer', pokemon: 'Charizard' }
      ];
      spyOn(service, 'all').and.returnValue(of(userResponse));
      service.all().subscribe(res => {
        expect(res).toEqual(userResponse);
      });
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse: User = { id: '2', name: 'Bob', role: 'Developer', pokemon: 'Charizard' };
      spyOn(service, 'findOne').and.returnValue(of(userResponse));
      service.findOne('2').subscribe(res => {
        expect(res).toEqual(userResponse);
      });
    });
  });
});
