import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-fin',
  templateUrl: './add-edit-fin.component.html',
  styleUrls: ['./add-edit-fin.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() fin:any;
  FinanceId:string | undefined;
  FinanceName:string | undefined;
  Catorgy:string | undefined;
  DateOfJoining:string | undefined;


  CatorgyList:any=[];

  ngOnInit(): void {
    this.loadCatorgyList();
  }

  loadCatorgyList(){
    this.service.getAllCatorgyNames().subscribe((data:any)=>{
      this.CatorgyList=data;

      this.FinanceId=this.fin.FinanceId;
      this.FinanceName=this.fin.FinanceName;
      this.Catorgy=this.fin.Catorgy;
      this.DateOfJoining=this.fin.DateOfJoining;
    });
  }

  addFinance(){
    var val = {FinanceId:this.FinanceId,
                FinanceName:this.FinanceName,
                Catorgy:this.Catorgy,
              DateOfJoining:this.DateOfJoining,
            

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFinance(){
    var val = {FinanceId:this.FinanceId,
      FinanceName:this.FinanceName,
      Catorgy:this.Catorgy,
    DateOfJoining:this.DateOfJoining,

    this.service.updateFinance(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
}