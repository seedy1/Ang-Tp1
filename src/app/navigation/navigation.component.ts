import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import User from '@backend/models/user';
import {MeService} from "../me.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  me: User;

  constructor(private ar: ActivatedRoute, private router: Router, private meService: MeService){
    this.me = ar.snapshot.data.me;
  }

  async logout(){
      await this.meService.logout();
      await this.router.navigateByUrl("/login");
  }

}
