import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent implements AfterViewInit, OnInit {
  // #titleInput => TEMPLATE VARIABLE
  //ci aiuta a capire quali sono i child components nel componente. ha bisogno di un selector. posso passare
  //anche template variables.
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // è possibile usare anche la viewchild function che ritorna un signal che lavora con qualsiasi type. usiamo () dal momento
  // che è un segnale required garantisce che l'elemento venga trovato, quindi non c'è bisogno di usare la ? notation
  private functionForm = viewChild.required<ElementRef<HTMLFormElement>>('form');
  
  

  onSubmit(titleElement: HTMLInputElement, textArea: string) {
    const entered = titleElement.value;
    console.dir(entered, textArea);

    this.form?.nativeElement.reset();

    this.functionForm().nativeElement.reset();
  }

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }
  

}
