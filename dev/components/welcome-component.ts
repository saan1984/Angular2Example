import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'welcome'
})
@View({
    templateUrl: 'templates/welcome.html'
})

export class WelcomeComponent {
    name: string;
    constructor() {
        this.name = 'Sandeep';
    }
}