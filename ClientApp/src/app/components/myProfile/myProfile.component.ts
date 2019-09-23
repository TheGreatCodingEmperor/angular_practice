// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'myProfile',
    templateUrl: './myProfile.component.html',
    styleUrls: ['./myProfile.component.scss'],
    animations: [fadeInOut]
})
export class MyProfileComponent {
}
