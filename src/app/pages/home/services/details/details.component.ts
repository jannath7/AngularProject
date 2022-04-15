import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from 'src/app/model/models';
import { HomeService } from 'src/app/services/home.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number=0;
record:details={id:0,title:"",description:[]}
  constructor(private route:ActivatedRoute,private hs:ContactService) { 
    this.route.params.subscribe(params=> {
      this.id=params["id"]
      this.hs.getDetails(this.id).subscribe({
        next:(x:details)=>{this.record=x},
        error:(error:any)=>this.record={id:0,title:"",description:[]}
      })

  })
}
 
  ngOnInit(): void {
  }

}

