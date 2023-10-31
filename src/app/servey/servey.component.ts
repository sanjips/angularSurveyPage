import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService,  } from 'src/app/_services/account.service';
import {  AlertService } from 'src/app/_services/alert.service';

import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({ 
  
  selector: 'app-serveys',
  templateUrl: 'servey.component.html',
})
export class ServeyComponent implements OnInit {
  @ViewChild('tabset') tabset:TabsetComponent ;

 
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

public isCollapsed :boolean= false;  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {
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

        this.title = 'Add User';
     
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

    private saveUser() {
        // create or update user based on id param
    //     return this.id
    //         ? this.accountService.update(this.id!, this.form.value)
    //         : this.accountService.register(this.form.value);
    }
}