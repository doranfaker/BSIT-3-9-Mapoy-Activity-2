import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../initialization/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  profileData!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileData = this.profileService.getProfile();
  }
}