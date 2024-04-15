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

    const username = '41ca3882655109d0bd827e78aa5afe0f154e8d69';
    const password = ''; // Assuming no password in your curl command
    const base64Credentials = btoa(username + ':' + password);

    // Add the Authorization header with the encoded credentials
    const headers = {
      'Authorization': 'Basic ' + base64Credentials,
      'Content-Type': 'application/json'
    };

    // Make the HTTP request
    return this.http.get('http://localhost:40000/authenticate', { headers });
  }
}
