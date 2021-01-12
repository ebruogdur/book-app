import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService:BookService,private route:ActivatedRoute) { }

  books!:Book[];
  categoryById:any;
  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{

      this.categoryById=params.get("id");
      if(this.categoryById){

        this.bookService.getBooksByCategoryId(this.categoryById).subscribe(result=>{
          this.books=result;
        })
      }
      else{
        this.bookService.getBooks().subscribe(result=>{

          this.books=result;
        })
      }
    })




  }

}
