import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../global.service";
@Component({
  selector: "app-hal1",
  templateUrl: "./hal1.component.html",
  styleUrls: ["./hal1.component.css"]
})
export class Hal1Component implements OnInit {
  nama: String = "";
  judul: String = "";
  isi: String = "";
  tanggal: String = "";

  constructor(public router: Router, public gv: GlobalService) {
    this.nama = gv.nama;
    //this.router.navigateByUrl("/halaman2");
  }

  ngOnInit() {}

  simpan() {
    let ob: any = {};
    ob.nama = this.nama;
    ob.judul = this.judul;
    ob.isi = this.isi;
    ob.tanggal = this.tanggal;
    this.gv.data.push(ob);
    this.router.navigateByUrl("/halaman2");
  }
}
