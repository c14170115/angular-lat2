import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "./global.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(public router: Router, public gv: GlobalService) {
    gv.nama = "test";
    this.router.navigateByUrl("/halaman1");
  }
}
