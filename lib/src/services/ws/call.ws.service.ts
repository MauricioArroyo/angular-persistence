import { InputWS } from './../../interficies/ws.input.persistence';
import { ModelOutputData } from './../../interficies/model.output.persistence';
import { OutputWS } from './../../interficies/ws.output.persistence';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CallWsService {
  constructor(private http: HttpClient) { }

  public getDataGet(url: string): Observable<ModelOutputData<OutputWS>> {
    return this.http.get<ModelOutputData<OutputWS>>(url); 
  }

  public getDataPost(url: string, input: InputWS): Observable<ModelOutputData<OutputWS>> {
    return this.http.post<ModelOutputData<OutputWS>>(url, input); 
  }
}