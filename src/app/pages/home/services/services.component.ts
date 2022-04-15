import { Component, Input, OnInit } from '@angular/core';
import { servs } from 'src/app/model/models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
@Input('service') current:servs={id:0,title:"",description:"",image:""};
  constructor() { }

  ngOnInit(): void {
  }

}