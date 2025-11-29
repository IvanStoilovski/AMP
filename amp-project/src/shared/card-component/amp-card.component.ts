import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TuiAppearance, TuiSurface, TuiTitle } from "@taiga-ui/core";
import { TuiCardLarge, TuiHeader } from "@taiga-ui/layout";

@Component({
    selector: 'amp-card',
    templateUrl: './amp-card.component.html',
    styleUrl: './amp-card.component.css',
    standalone: true,
    imports: [
        TuiAppearance,
        TuiCardLarge,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiSurface,
        TuiTitle
    ]
})

export class AmpCardComponent{
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Output() cardClicked: EventEmitter<void> = new EventEmitter();

    protected emitCardClicked(){
        this.cardClicked.emit();
    }
}