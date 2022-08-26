import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cator',
  templateUrl: './add-edit-cator.component.html',
  styleUrls: ['./add-edit-cator.component.css']
})
export class AddEditCatorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cator:any;
  Id:string | undefined;
  CatorgyName:string | undefined;

  ngOnInit(): void {
    this.Id=this.cator.Id;
    this.CatorgyName=this.cator.CatorgyName;
  }

  addCatorgy(){
    var val = {Id:this.Id,
          CatorgyName:this.CatorgyName};
    this.service.addCatorgy(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCatorgy(){
    var val = {Id:this.Id,
      CatorgyName:this.CatorgyName};
    this.service.updateCatorgy(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}