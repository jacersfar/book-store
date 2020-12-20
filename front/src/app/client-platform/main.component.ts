import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/client.model';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user!: Client;
  constructor(private sessionService: SessionService) {
    this.sessionService.updateClientSession(JSON.parse(localStorage.getItem('client')!));
  }
  ngOnInit(): void {
    this.sessionService.client().subscribe(
      client => this.user = client
    )
  }
}
