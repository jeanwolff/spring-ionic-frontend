import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoriaService } from "../../services/domain/categoria.service";
import { CategoriaDTO } from "../../models/categoria.dto";
import { API_CONFIG } from "../../config/api.config";

@IonicPage()
@Component({
  selector: "page-categorias",
  templateUrl: "categorias.html"
})
export class CategoriasPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) {}

  items: CategoriaDTO[];
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  showProdutos() {
    this.navCtrl.push("ProdutosPage");
  }

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(
      response => {
        this.items = response;
      },
      error => {}
    );
  }
}
