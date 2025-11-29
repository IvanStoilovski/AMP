import { Component } from "@angular/core";
import { AmpCardComponent } from "../../../shared/card-component/amp-card.component";
import { Router } from '@angular/router';

@Component({
    selector: 'parameter-management',
    templateUrl: './parameter-management.component.html',
    styleUrl: './parameter-management.component.css',
    standalone: true,
    imports: [AmpCardComponent]
})

export class ParameterManagementComponent{
    constructor(private router: Router) { }

    welcomeMessage = 'Welcome User!';

    public navigateToGenerator(){
        this.router.navigate(['/generate']);
    }
    
    public navigateToParams(){
        this.router.navigate(['/']);
    }
}