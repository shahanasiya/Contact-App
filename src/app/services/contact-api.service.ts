import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {

  BASE_URL='https://contact-app-fvz9.onrender.com'

  constructor(private http:HttpClient) { }

  //handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    errorMsg =`Error: ${error.message}`
    //if(error.error){
      //client error
      //errorMsg =`Error: ${error.error.message}`
    //}
    //else{
      //errorMsg = `Status: ${error.status} \n Error: ${error.message}`
   // }
    return throwError(()=>errorMsg)
  }


  //get all contacts api
  getAllContacts(){
    //api call:url=http://localhost:3000/contacts req: get
   return this.http.get(`${this.BASE_URL}/contacts`)
  }
  //view contact
  viewContact(id:any){
      //api call:url=http://localhost:3000/contacts/ca1 req: get
      return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  //get a particular group
  getGroup(id:any){
    //api call:url=http://localhost:3000/groups/3 req: get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  //get all group
  getGroups(){
    //api call:url=http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  // add contact 
  addContact(contact:contactSchema){
    //api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

    //delete contact
    deleteContact(id:any){
      //api call server
      return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
    }

    //edit a contact
    editContact(id:any,contact:contactSchema){
       //api call server
       return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
    }
}
