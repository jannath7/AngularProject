
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { detail } from 'src/app/model/models';
@Component({  
  selector: 'app-details', 
   templateUrl: './details.component.html',  
   styleUrls: ['./details.component.css']})



export class DetailsComponent implements OnInit {
  id:number=0;record:detail={id:0,title:"",description:""};
  constructor(private route:ActivatedRoute,private hs:ContactService) {
     this.route.params.subscribe(params=> {
       this.id=params["id"]
     this.hs.getDetails(this.id).subscribe({
       next:(x:any)=>{this.record=x},error:(error:any)=>this.record=
       {id:0,title:"",description:""}}) })}ngOnInit(): void {}}

