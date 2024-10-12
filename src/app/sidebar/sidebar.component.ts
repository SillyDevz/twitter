import { Component, ViewEncapsulation } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [FontAwesomeModule],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHome,
      faHashtag,
      faBell,
      faEnvelope,
      faBookmark,
      faList,
      faUser,
      faEllipsisH
    );
  }
}
