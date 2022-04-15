import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.css']
})
export class ServiceboxComponent implements OnInit {
  @Input() current:any;
  constructor() { }

  ngOnInit(): void {
  }

}
