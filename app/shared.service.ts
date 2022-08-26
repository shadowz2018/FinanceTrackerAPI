import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:44360/api";


  constructor(private http:HttpClient) { }

  getCatorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/catorgies');
  }

  addCatorgy(val:any){
    return this.http.post(this.APIUrl+'/catorgies',val);
  }

  updateCatorgy(val:any){
    return this.http.put(this.APIUrl+'/catorgies',val);
  }

  deleteCatorgy(val:any){
    return this.http.delete(this.APIUrl+'/catorgies/'+val);
  }


  getFinList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/finances');
  }

  addFinance(val:any){
    return this.http.post(this.APIUrl+'/finances',val);
  }

  updateFinance(val:any){
    return this.http.put(this.APIUrl+'/finances',val);
  }

  deleteFinance(val:any){
    return this.http.delete(this.APIUrl+'/finances/'+val);
  }

  getAllCatorgyNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/finances/GetAllCatorgyNames');
  }

}