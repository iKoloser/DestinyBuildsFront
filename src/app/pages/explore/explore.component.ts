import { HttpClient } from '@angular/common/http';
import { MyApiService } from './../../services/my-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
  providers: [MyApiService],

})
export class ExploreComponent implements OnInit{

  data : any[] = [];
  datas!:any;


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

  getArma1ImgUrl(id : number){
    this.MyApiService.getDataArmasById(2).subscribe((data) => {
      console.log(id);
      this.datas = data;
      
    })
  }

}
