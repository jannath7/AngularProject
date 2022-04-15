import { Component, OnDestroy, OnInit } from '@angular/core';
import { servs } from 'src/app/model/models';
import { HomeService } from 'src/app/services/home.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
slist:servs[]=[];
  constructor(private hs:HomeService) { 
      console.log("Home component instantiated")
  }

  ngOnInit(): void {
    this.hs.getServices().subscribe(
      {
      next: (data:servs[])=>this.slist=data,
      error: (error)=>this.slist=[]
      }
    )
  }

  ngOnDestroy(): void {
    console.log("Home component Destroyed")
  }
}