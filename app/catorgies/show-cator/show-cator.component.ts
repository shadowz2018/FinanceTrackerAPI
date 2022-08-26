import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cator',
  templateUrl: './show-cator.component.html',
  styleUrls: ['./show-cator.component.css']
})
export class ShowCatorComponent implements OnInit {

  constructor(private service:SharedService) { }

  CatorgiesList:any=[];

  ModalTitle: string | undefined;
  ActivateAddEditCatorComp:boolean=false;
  cator:any;

  IdFilter:string="";
  CatorgyNameFilter:string="";
  CatorgiesListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatorList();
  }

  addClick(){
    this.cator={
      Id:0,
      CatorgyName:""
    }
    this.ModalTitle="Add Catorgy";
    this.ActivateAddEditCatorComp=true;

  }

  editClick(item: any){
    this.cator=item;
    this.ModalTitle="Edit Catorgy";
    this.ActivateAddEditCatorComp=true;
  }

  deleteClick(item: { Id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteCatorgy(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshCatorList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatorComp=false;
    this.refreshCatorList();
  }


  refreshCatorList(){
    this.service.getCatorList().subscribe(data=>{
      this.CatorgiesList=data;
      this.CatorgiesListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentIdFilter = this.IdFilter;
    var DepartmentNameFilter = this.CatorgyNameFilter;

    this.CatorgiesList = this.CatorgiesListWithoutFilter.filter(function (el: { DepartmentId: { toString: () => string; }; DepartmentName: { toString: () => string; }; }){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.CatorgiesList = this.CatorgiesListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
