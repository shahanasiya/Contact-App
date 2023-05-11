import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactApiService } from '../services/contact-api.service';
import { contactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:contactSchema={}
  groups:any=[]

  constructor(private editActivatedRoute:ActivatedRoute,private api:ContactApiService,private editRouter:Router){

  }
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id} =pathParameter
        console.log(id);
        //call view contact api
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact = response
            
          }

        })
      
      }
    })

    //get all groups
    this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        this.groups = allGroups
        console.log(this.groups);
        
      }
    })
  }
  

  //edit contact
  editContact(id:any){
    //api call to edit contact
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        //navigate all contact
        this.editRouter.navigateByUrl("")
      }
    })
  }

}
