import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TrendsComponent } from './trends/trends.component';
import { TweetsComponent } from './tweets/tweets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    ProfileComponent,
    SuggestionsComponent, 
    TrendsComponent,
    TweetsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twitter';
}
