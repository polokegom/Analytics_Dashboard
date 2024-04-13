import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApipdfconverterService {

  constructor(private http: HttpClient) { 

  }

  public convertPDFtoCSV(pdfFile:File): Observable<any> {

    const headers = new HttpHeaders({
      'x-api-key': 'pomakga022@student.wethinkcode.co.za_39O6yv42Wcv8QT1HQi4QIYtVxadXZWc9ShnbN8UTpA34j9mGLNCQDUSVsOU27v3a'
    });

    return this.http.get<any>('https://pdftables.com/api/remaining?key=2zhfvzmp0bpf');
  }
}
