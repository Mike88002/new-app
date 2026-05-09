import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent,],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  ticketData = input.required<Ticket>(); 
  detailsVisible = signal(false);
  closed = output();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisibile) => !wasVisibile );
  }

  onMarkAsCompleted() {
    this.closed.emit();
  }

}
