import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { MenuController } from "../../../node_modules/ionic-angular/components/app/menu-controller";
import { CredenciaisDTO } from "../../models/credenciais.dto";
import { AuthService } from "../../services/auth.service";
import { StorageService } from "../../services/storage.services";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService
  ) {}

  creds: CredenciaisDTO = { email: "", senha: "" };

  login() {
    this.auth.authenticate(this.creds).subscribe(
      response => {
        //console.log(response.headers.get("Authorization"));
        this.auth.successfulLogin(response.headers.get("Authorization"));
        this.navCtrl.setRoot("CategoriasPage");
      },
      error => {}
    );
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken().subscribe(
      response => {
        this.auth.successfulLogin(response.headers.get("Authorization"));
        this.navCtrl.setRoot("CategoriasPage");
      },
      error => {}
    );
  }

  signup() {
    this.navCtrl.push("SignupPage");
  }
}
