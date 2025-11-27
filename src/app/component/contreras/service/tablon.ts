import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../../../environment/environment';
import { IPage } from '../model/plist';
import { ITablon } from '../model/tablon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablonService {

  constructor(private oHttp: HttpClient) { }

  getPage(page: number, rpp: number, order: string = '', direction: string = ''): Observable<IPage<ITablon>> {
    if (order === '') {
      order = 'id';
    }
    if (direction === '') {
      direction = 'asc';
    }
    return this.oHttp.get<IPage<ITablon>>(serverURL + `/Tablon?page=${page}&size=${rpp}&sort=${order},${direction}`);
  }

  get(id: number): Observable<ITablon> {
    return this.oHttp.get<ITablon>(serverURL + '/Tablon/' + id);
  }

  create(Tablon: Partial<ITablon>): Observable<number> {
    return this.oHttp.post<number>(serverURL + '/Tablon', Tablon);
  }

  update(Tablon: Partial<ITablon>): Observable<number> {
    return this.oHttp.put<number>(serverURL + '/Tablon', Tablon);
  }

  delete(id: number): Observable<number> {
    return this.oHttp.delete<number>(serverURL + '/Tablon/' + id);
  }

  rellenaTablon(numPosts: number): Observable<number> {
    return this.oHttp.get<number>(serverURL + '/Tablon/rellena/' + numPosts);
  }

}
