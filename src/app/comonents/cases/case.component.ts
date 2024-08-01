import { Component } from '@angular/core';
import {  FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CaseService } from '../../services/case.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Case, StatusEnum } from '../../models/case.module';

@Component({
  selector: 'app-case',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent {
  constructor(private caseService: CaseService, private route: Router) { }
  activeStatus=StatusEnum.active;
  closeStatus=StatusEnum.close;
  cases: Case[] = [];
  casesFilter: Case[] = [];
  searchText:string ="";
  userId:number=1;
  ngOnInit(): void {
    this.gatAllCasea();
    this.onSortDate();
    //IF HAS USERSERVICE
    // this.userService.gatUserId().subscribe(
    //   res=>{
    // this.userId =res;
    //   }
    // )
  }
  gatAllCasea() {
    this.cases = this.caseService.gatAllCases();
    this.casesFilter = this.cases;
    // this.caseService.gatAllCases().subscribe(
    //   res=>{
    // this.cases =res;
    //   }
    // )
  }
  filterByText(){
    if(this.searchText==""){
      this.casesFilter=this.cases;
    }
    else{
      this.casesFilter=this.cases.filter((item: Case) => item.numCase.startsWith(this.searchText) || item.submitsExcitation.startsWith(this.searchText));
    }
  }

  filterByUser(){
    this.searchText="";
    this.casesFilter=this.cases.filter((item: Case) => item.userId==this.userId );
  }

  filterByStatus(status:StatusEnum){
    this.searchText="";
    this.casesFilter=this.cases.filter((item: Case) => item.statusId==status );
  }

  setAllCases(){
    this.casesFilter=this.cases;
  }
  onSort(value: any){
    switch (value.value) {
      case "dateCreate":
        this.onSortDate();
        break;
        case "numCase":
          this.onSortNumCase();
          break;
      default:
        break;
    }
  }
  onSortDate(){
    this.casesFilter=this.casesFilter.sort((b, a) => new Date(b.dateCreate).getTime() - new Date(a.dateCreate).getTime())
  }

  onSortNumCase(){
    this.casesFilter=this.casesFilter.sort((b,a) => a.numCase.localeCompare(b.numCase))
  }
}
