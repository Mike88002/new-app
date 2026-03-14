import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // si puo usare l'host anche con il decoratore, optional input. ma non è consigliato per ragioni di compatibilità
  // @HostBinding('class') className = 'control';

  //tutte alternative ad usare  '(click)': 'onClick()' , ma l'angular team consiglia di mettere tutto in host all'interno di  @Component
  // @HostListener('click') onCliCk() {
  //   console.log('click')
  // }

  label = input.required<string>();

  onClick() {
    console.log('click')
  }

}
