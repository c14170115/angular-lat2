import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-hal2",
  templateUrl: "./hal2.component.html",
  styleUrls: ["./hal2.component.css"]
})
export class Hal2Component implements OnInit {
  data: any;
  constructor(public router: Router, public gv: GlobalService) {
    //this.data = gv.data;
    this.refill();
  }

  refill() {
    this.data = [];
    for (var i = 0; i < this.gv.data.length; i++) {
      if (this.gv.favorited.includes(i)) {
        this.gv.data[i].favorited = 1;
      } else {
        this.gv.data[i].favorited = 0;
      }
      this.data.push(this.gv.data[i]);
    }
  }

  ngOnInit() {}

  favorite(idx) {
    alert(this.data[idx].judul + " telah difavoritkan");
    this.gv.favorited.push(idx);
    this.refill();
    //console.log("favorite " + idx);
  }
}
