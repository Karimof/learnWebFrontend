import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPart} from "../../model/part-model";

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(protected http: HttpClient) {
  }

  partBySubmenuId(submenuId: number): Observable<HttpResponse<IPart[]>> {
    return this.http.get<IPart[]>('http://localhost:8081/api/part/submenuId/' + submenuId, {observe: 'response'})
  }

  partBySubSubmenuId(submenuId: number, subSubmenuId: number): Observable<HttpResponse<IPart[]>> {
    let params = new HttpParams();
    params = params.append('submenuId', submenuId);
    params = params.append('subSubmenuId', subSubmenuId);
    return this.http.get<IPart[]>('http://localhost:8081/api/part/subSubmenu', {observe: 'response', params: params})
  }

  byType(themeId: number, submenuId: number): Observable<HttpResponse<IPart[]>> {
    let params = new HttpParams();
    params = params.append('themeId', themeId);
    params = params.append('submenuId', submenuId);
    return this.http.get<IPart[]>('http://localhost:8081/api/part/byType', {observe: 'response', params: params})
  }
}
