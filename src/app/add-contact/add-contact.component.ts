import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ContactApiService } from '../services/contact-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

 contact:contactSchema={}
  groups:any=[]
 constructor(private api:ContactApiService,private addContactRouter:Router){
  
      this.contact.groupId = "Select A Group"
 }
 ngOnInit(): void {
   this.api.getGroups().subscribe({
    next:(response:any)=>{
      console.log(response);
       this.groups = response
    },
    error:(err:any)=>{
      console.log(err.message);
      
    }
   })
 }
    create(groupId:any){
      console.log(groupId.model);
  }

addContact(contact:contactSchema){
  // call api in service
  this.api.addContact(contact).subscribe({
    next:(response:any)=>{
      //data add to server side
      console.log(response);
      //navigate to allcontacts page
       this.addContactRouter.navigateByUrl('') 
    },
    error:(err:any)=>{
      console.log(err); 
    }
  })
}

}
