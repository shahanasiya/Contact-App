import { Component, OnInit } from '@angular/core';
import { ContactApiService } from '../services/contact-api.service';
@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  
  allContacts:any=[]
  isLoading:boolean = true
  errorMsg:string =''
  searchKey:string=''
  constructor(private api:ContactApiService){

  }

  ngOnInit(): void {
    this.getAllContacts()
  }
  getAllContacts(){
  this.api.getAllContacts().subscribe({
    next:(response:any)=>{
      console.log(response); 
      setTimeout(()=>{
        this.allContacts = response
        this.isLoading = false
      },2000);
     
    },
    error:(err:any)=>{
    console.log(err.message);
    this.errorMsg = err.message
    this.isLoading = false
    }    
  }
  )
}
// delete contact
deleteContact(id:any){
  // call  delete api from api service
  this.api.deleteContact(id).subscribe({
    next:(response:any)=>{
      this.getAllContacts()
    }
  })
}

}
