import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Category } from '../models/category';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient:HttpClient) { }
  apiUrl:string=`${environment.baseUrl}/category`;

  addCategory(category:Category){
    return this.HttpClient.post<any>(this.apiUrl,category);
  }

  getCategories(){
    var a=this.HttpClient.get<any>(this.apiUrl).pipe(map(result=>result.data));
    a.forEach(element => {
      console.log(element);
    });
    return this.HttpClient.get<any>(this.apiUrl).pipe(map(result=>result.data));
  }

  updateCategory(categoryId:string,category:Category){

    return this.HttpClient.put<any>(`${this.apiUrl}/${categoryId}`,category);
  }
  getCategoryById(id:string){

    return this.HttpClient.get<any>(`${this.apiUrl}/${id}`).pipe(map(result=>result.data));
  }


  deleteCategory(categoryId:string){

    return this.HttpClient.delete<any>(`${this.apiUrl}/${categoryId}`);
  }

}
