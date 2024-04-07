import { Component } from '@angular/core';
import { PdfconverterService } from '../pdfconverter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  csvContent!: string;
  constructor(){


  }

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        alert("successful")
    }
  }
}
