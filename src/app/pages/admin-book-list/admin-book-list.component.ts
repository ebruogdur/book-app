import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  constructor(private boookService:BookService) { }

  books: any;
  dataSource: any;

  displayedColumns: string[] = ['picture','title','author','stock','price','category','action'];
  @ViewChild(MatPaginator) paginator: any;




  ngOnInit(): void {


    this.boookService.getBooks().subscribe(result=>{
      this.books=result;
      this.dataSource=new MatTableDataSource<Category>(this.books);
      this.dataSource.paginator=this.paginator;
    })
  }

  delete(bookId:string){
    this.boookService.deleteBook(bookId).subscribe(result=>{

      if(result.status="success"){
        let book=this.books.filter((x: { _id: string; })=>x._id==bookId)[0];
        let index=this.books.indexOf(book);
        this.books.splice(index,1);
        this.dataSource=new MatTableDataSource<Category>(this.books);

      }else{

        alert("silme yapılamadı");
      }


    })

  }

}
