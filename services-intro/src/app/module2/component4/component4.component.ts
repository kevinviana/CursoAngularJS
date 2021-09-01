import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { Service1 } from '../service1.service';


@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  text = "";
  num = 0;
  constructor(private myService1: Service1, private myService2: Service2) { }

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}

