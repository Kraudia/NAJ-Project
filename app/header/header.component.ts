import { Component } from '@angular/core';

@Component({
    selector: 'myHeader',
    templateUrl: 'app/header/header.component.html',
    styleUrls: [ 'app/header/header.component.css' ]
})
export class HeaderComponent {
    public meassage:string = 'Hello!';
}
