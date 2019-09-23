// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeInOut]
})
export class AboutComponent { }
