import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { MenuController } from "../../../node_modules/ionic-angular/components/app/menu-controller";
import { CredenciaisDTO } from "../../models/credenciais.dto";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public menu: MenuController) {}

  creds: CredenciaisDTO = { email: "", senha: "" };

  login() {
    console.log(this.creds);
    this.navCtrl.setRoot("CategoriasPage");
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
}
