import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid:number;
  name:string;
  about:string;
  location:Location;
  languages:Languages;
  status:boolean;
  recomandation:number;
  answerCall:string;
  constructor(private _http:HttpService) { }


  ngOnInit() {
    this.userid=1;
    this.name="Bill Gates";
    this.about="Hi there.Welcome to my home. I enjoy meeting people from all over the world and I enjoy showing others why I love living in Central London.";
    this.location ={
      city: 'Almaty',
      country: 'Kazakhstan'
    };
    this.languages={
      first: 'Kazakh',
      second: 'Russia',
      third: 'English'
    };
    this.status=false;
    this.recomandation=80;
    this.answerCall='30 min';
  }

}

interface Location {
  city:string,
  country:string
}

interface Languages {
  first:string,
  second:string,
  third:string
}

