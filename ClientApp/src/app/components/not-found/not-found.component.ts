// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    animations: [fadeInOut]
})
export class NotFoundComponent {
}
