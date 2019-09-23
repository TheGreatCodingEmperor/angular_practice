// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'myPersonalData',
    templateUrl: './myPersonalData.component.html',
    styleUrls: ['./myPersonalData.component.scss'],
    animations: [fadeInOut]
})
export class MyPersonalDataComponent {
    download(){
        console.log("download");
    }
    deleteAccount(){
        console.log("delete account");
    }
}
