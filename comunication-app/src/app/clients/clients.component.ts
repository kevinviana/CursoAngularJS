import { Component, OnInit } from '@angular/core';
import { Client } from './client.model'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name!: string;
  age!: number;
  clients: Client[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        age: this.age
      }
    );
    this.name = "";
    this.age = 0;
  }

  deleteClient(i:number) {
    this.clients.splice(i,1)
  }
  editClient(client:Client, i:number) {
    this.clients[i].name=client.name;
    this.clients[i].age=client.age;
  }
}
