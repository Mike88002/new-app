import { AfterContentInit, afterNextRender, afterRender, AfterViewInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  // si puo usare l'host anche con il decoratore, optional input.
  //  ma non è consigliato per ragioni di compatibilità
  // @HostBinding('class') className = 'control';

  //tutte alternative ad usare  '(click)': 'onClick()' , ma l'angular team consiglia
  //  di mettere tutto in host all'interno di  @Component
  // @HostListener('click') onCliCk() {
  //   console.log('click')
  // }

  //il contenuto di ng-content, non è davvero parte del template, quindi viewchild e dren prendono solo quello
  //che è parte del template. si usa contentChild o contentChildren

  constructor() {
    afterRender(() => {
      console.log('afterrender')
    })

    afterNextRender(() => {
      console.log('after next render')
    })
  }

  
  label = input.required<string>();
  private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private controlFunction = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('click')
    //console.log(this.el);
    console.log(this.control);
    console.log(this.controlFunction());
  }

  ngAfterContentInit(): void {
    console.log(this.control?.nativeElement);
  }

}
