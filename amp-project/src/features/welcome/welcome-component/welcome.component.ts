import { Component } from "@angular/core";

@Component({
    selector: 'amp-welcome',
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css'
})

export class WelcomeComponent{
    welcomeMessage = 'Welcome User!';
}