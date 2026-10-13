import { Injectable } from '@angular/core';
import { Profile } from '../initialization/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile = {
    name: 'Neil Anthony Mapoy',
    username: 'l1e.n_n',
    email: 'mapoyneilanthony@gmail.com',
    address: '5086 Independence St., Gen. T. de Leon, Valenzuela City',
    avatarUrl: 'https://i.pinimg.com/736x/01/2c/d0/012cd09ea0c886a6a5cd6f8be83f86d7.jpg'
  };

  getProfile(): Profile {
    return this.profile;
  }
}