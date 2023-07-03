import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITheme} from "../../model/theme-model";

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(protected http: HttpClient) {}

  query(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8081/api/themes/sorted', { observe: 'response' });
  }

  getSubThemes(themeId: number): Observable<HttpResponse<ITheme[]>> {
    return this.http.get<ITheme[]>('http://localhost:8081/api/themes/sub/' + themeId, { observe: 'response' });
  }
}
