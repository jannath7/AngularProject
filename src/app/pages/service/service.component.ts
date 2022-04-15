import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { servs } from 'src/app/model/models';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serv:servs[]=[];
  constructor(private cs:ContactService) { }

  ngOnInit(): void {
    this.cs.getServices().subscribe({
      next:(data:any)=>this.serv=data,
      error: (error:void )=>this.serv=[]
    })
  }
}



