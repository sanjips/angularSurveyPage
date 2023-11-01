import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService,  } from 'src/app/_services/account.service';
import {  AlertService } from 'src/app/_services/alert.service';

import { TabsetComponent } from 'ngx-bootstrap/tabs';
 import {faTrash, faEdit, faClose} from '@fortawesome/free-solid-svg-icons'
import { MatDialogRef } from '@angular/material/dialog';
import {PagingConfig} from 'src/app/_models/paginate'
@Component({ 
  
  selector: 'app-serveys',
  templateUrl: 'servey.component.html',
})
export class ServeyComponent implements OnInit,PagingConfig {
  @ViewChild('tabset') tabset:TabsetComponent ;
  participantData:any;
  btnClose=faClose;

  noOfParticipant:number=0;
  searchText:'';
  multiSelect: boolean = false;
  selectedData:any;
 
     form!: FormGroup;

    id?: string;
    title!: string;
    loading :boolean= false;
    submitting:boolean = false;
    submitted :boolean= false;
localStorageValue:any
activeEmployee:any
totalEmployee:any
activeManager:any
buttonName:any
inValid: boolean = false;
displayStyle:any
length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
tableSize: number[] = [5, 10, 15, 20];
config:any

 // customers = new Array<Customer>();

  pagingConfig: PagingConfig = {} as PagingConfig;

private ref: MatDialogRef<ServeyComponent>
public p:number;
public isCollapsed :boolean= false;  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        
    ) {
      
      this.participantData=[
          
        {id:1,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
        {id:2,team:'RAJAN',name:'sanjip',location:'gurgaon',reporting:'ss'},
        {id:3,team:'SORAV',name:'sanjip',location:'gurgaon',reporting:'suraj'},
        {id:4,team:'SANJ',name:'sanjip',location:'gurgaon',reporting:'rajan'},

        {id:5,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
        {id:6,team:'RAJAN',name:'sanjip',location:'gurgaon',reporting:'ss'},
        {id:7,team:'SORAV',name:'sanjip',location:'gurgaon',reporting:'suraj'},
        {id:9,team:'SANJ',name:'sanjip',location:'gurgaon',reporting:'rajan'},
       {id:10,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
        {id:12,team:'RAJAN',name:'sanjip',location:'gurgaon',reporting:'ss'},
        {id:13,team:'SORAV',name:'sanjip',location:'gurgaon',reporting:'suraj'},
        {id:14,team:'SANJ',name:'sanjip',location:'gurgaon',reporting:'rajan'},

        {id:15,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
        {id:16,team:'RAJAN',name:'sanjip',location:'gurgaon',reporting:'ss'},
        {id:17,team:'SORAV',name:'sanjip',location:'gurgaon',reporting:'suraj'},
        {id:19,team:'SANJ',name:'sanjip',location:'gurgaon',reporting:'rajan'},
      
      
      
        {id:20,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
        {id:21,team:'RAJAN',name:'sanjip',location:'gurgaon',reporting:'ss'},
        {id:22,team:'SORAV',name:'sanjip',location:'gurgaon',reporting:'suraj'},
        {id:23,team:'SANJ',name:'sanjip',location:'gurgaon',reporting:'rajan'}
      
      ]
      this.currentItemsToShow = this.participantData;
      this.config = {
        id: 'basicPaginate',
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.participantData.length
      };
      this.pagingConfig = {
        itemsPerPage: this.itemsPerPage,
        currentPage: this.currentPage,
        totalItems: this.totalItems
      }
        debugger
var StorageVal=localStorage.getItem('user');
var value=JSON.parse(StorageVal || '{}')
this.localStorageValue=value;
this.activeEmployee=1300
this.totalEmployee=1700
this.activeManager=67
this.buttonName="back to Survey Template"

     }
    tab = 1;
    navigateTo(ccompone :any) {
        debugger;
        this.router.navigate([ccompone]);
      }
    ngOnInit() {
        // this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // password only required in add mode
        });
//this.participantData()

        this.title = 'Add User';
     
    }
currentItemsToShow= [];
pageChanged(event:any)
{
  this.config.currentPage = event;
}


    openPopup() { 
      this.displayStyle = "block"; 
    } 
    closePopup() { 
      this.displayStyle = "none"; 
    }
    onPageChange($event:any) {
      this.currentItemsToShow =  this.participantData.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
backTab(number:any)
{
debugger

}
nextTab(Number:any)
{
debugger
this.inValid=true
}
updatePrev() {   
  debugger;
  const id=this.tabset.tabs.filter(tab=>tab.active == true)[0].id;
  if(Number(id)-1 >= 0) {
  this.tabset.tabs.filter(tab=>Number(tab.id) == (Number(id))-1)
  if(Number(id)==1)
  {
    this.buttonName="Back To Survey Template"
  }
  else if(Number(id)==2)
{
  this.buttonName="Back to Survey Setting"
  }
else if(Number(id)==3)
{
  this.buttonName="Back to Question"
}
  this.tabset.tabs[(Number(id))-1].active = true;
  }
}

updateNext(){   
  debugger;
 let count = this.tabset.tabs.length;
  const id=this.tabset.tabs.filter(tab=>tab.active == true)[0].id;
  if(Number(id)+1 < count) {

    this.tabset.tabs.filter(tab=>Number(tab.id) == (Number(id))+1)
    if(Number(id)+1==1)
    {
      this.buttonName="Back To Servey Setting";
    }
   else if(Number(id)+1==2)
    {
      this.buttonName="Back to Question ";
    }
    else if(Number(id)+1==3)
    {
      this.buttonName="back to Survey Audience"
    }

    this.tabset.tabs[(Number(id))+1].active = true;
  }
}
    onSubmit() {
        
    }


    
  participantList(){
    debugger
     this.accountService.getParticipantsList().subscribe((result)=>{
       console.log("service data::",result);    
       this.participantData = result; 
      //  this.participantData=[{id:1,team:'sanjip',name:'sanjip',location:'gurgaon',reporting:'sorve'},
      //  {'id':2,'team':'sanjip','name':'sanjip','location':'gurgaon','reporting':'sorve'},
      //  {'id':3,'team':'sanjip','name':'sanjip','location':'gurgaon','reporting':'sorve'}
      // ]
       this.noOfParticipant = result.length;
     })
  }

  popUpClose(){
    this.ref.close();
  }

  onCheckboxChange() {
    console.log(this.participantData);
  }

  selectAll(event: any) {
   this.multiSelect = event.target.checked;
    // this.participantData && this.participantData.forEach(item => (item.checked = this.multiSelect));
  }

  isAllSelected() {
    //  return this.participantData && this.participantData.every(item => item.checked);
  }

  onButtonClick(){
    debugger
    console.log(this.participantData);
    this.selectedData = this.participantData && this.participantData.filter((item:any)=> item.checked == true);
    console.log("selected data::",this.selectedData);

  }
    private saveUser() {
        // create or update user based on id param
    //     return this.id
    //         ? this.accountService.update(this.id!, this.form.value)
    //         : this.accountService.register(this.form.value);
    }
    // getCustomers(){
    //   this.customerService.getCustomers()
    //   .subscribe(res=> {
    //     this.customers = res;
    //     this.pagingConfig.totalItems = res.length;
    //   });
    // }
  onTableDataChange(event:any){
      this.currentPage  = event;
      //this.getCustomers();
    }
    onTableSizeChange(event:any): void {
      this.itemsPerPage = event.target.value;
      this.currentPage = 1;
    //  this.getCustomers();
    }  
}