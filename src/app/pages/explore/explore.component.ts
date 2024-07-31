import { HttpClient } from '@angular/common/http';
import { MyApiService } from './../../services/my-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
  providers: [MyApiService],

})
export class ExploreComponent implements OnInit{

  data : any[] = [];

  constructor(private MyApiService  : MyApiService) {

  }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.MyApiService.getDataBuilds().subscribe((data) => {
      this.data = data
      console.log(this.data);
    })
  };

}
