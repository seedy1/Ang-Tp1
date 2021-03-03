import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import User from '@backend/models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  me: User | undefined;

  constructor(private ar: ActivatedRoute){
    this.me = ar.snapshot.data.me;
  }

  ngOnInit(): void {
  }

}
