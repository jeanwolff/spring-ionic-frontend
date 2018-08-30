import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidate.dto";

@Injectable()
export class CidadeService {
  constructor(public http: HttpClient) {}

  findAllByEstadoId(estado_id: string): Observable<CidadeDTO[]> {
    return this.http.get<CidadeDTO[]>(
      `${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`
    );
  }
}
