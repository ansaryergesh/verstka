import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  details: Home;

  constructor() { }

  ngOnInit() {
    let homeMap: HomeMap = {};
    let homeDetails: Home[] = [{
      userId:1,
      homeId:1,
      homePrice:"12000tenge/month",
      description:"description",
      room:4,
      nPeople:4,
      street: "Street1",
      star: 4.5
    }
    ,
    {
      userId:1,
      homeId:2,
      homePrice:"7000tenge/month",
      description:"description!!!",
      room:4,
      nPeople:5,
      street: "Street 222",
      star: 4.5
    }];

    homeDetails.forEach((s: Home) => {
      homeMap[s.homeId] = s;
    });
    
    for (let i = 0; i < homeDetails.length; i++) {
      // document.querySelector('.street').innerHTML = homeMap[homeDetails[i].homeId].street;
      console.log(homeMap[homeDetails[i].homeId].street); // Test Person1, Test Person 3
    }
   
  }


}


interface Home {
  userId:number;
  homeId:number;
  homePrice:string;
  description:string;
  room:number;
  nPeople:number;
  street:string;
  star:number;
}

interface HomeMap {
  [key: number]: Home;
}



