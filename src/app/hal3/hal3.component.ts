import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-hal3",
  templateUrl: "./hal3.component.html",
  styleUrls: ["./hal3.component.css"]
})
export class Hal3Component implements OnInit {
  data: any;
  constructor(public router: Router, public gv: GlobalService) {
    //this.data = gv.data;
    this.refill();
  }

  refill() {
    this.data = [];
    for (var i = 0; i < this.gv.data.length; i++) {
      if (this.gv.favorited.includes(i)) {
        this.data.push(this.gv.data[i]);
      }
    }
  }

  ngOnInit() {}
}
