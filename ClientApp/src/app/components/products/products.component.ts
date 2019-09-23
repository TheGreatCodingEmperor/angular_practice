// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [fadeInOut]
})
export class ProductsComponent {
}
