import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Category } from '../models/category';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl:string=`${environment.baseUrl}/book`;

  constructor(private HttpClient:HttpClient) { }


  addBook(book:Book){
    return this.HttpClient.post<any>(this.apiUrl,book);
  }

  saveBookImage(image:any){

    return this.HttpClient.post<any>(`${this.apiUrl}/saveImage`,image);
  }

  getBooks(){

    return this.HttpClient.get<any>(this.apiUrl).pipe(map(result=>result.data));
  }

  getBooksByCategoryId(categoryId:string)
{
  return this.HttpClient.get<any>(`${environment.baseUrl}/books/${categoryId}`).pipe(map(result=>result.data));
}

  updateBook(bookId:string,book:Book){

    return this.HttpClient.put<any>(`${this.apiUrl}/${bookId}`,book);
  }
  getBookById(id:string){

    return this.HttpClient.get<any>(`${this.apiUrl}/${id}`).pipe(map(result=>result.data));
  }


  deleteBook(bookId:string){

    return this.HttpClient.delete<any>(`${this.apiUrl}/${bookId}`);
  }



}
