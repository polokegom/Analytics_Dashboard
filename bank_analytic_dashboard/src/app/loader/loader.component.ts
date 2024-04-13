import { Component, HostListener } from '@angular/core';
import { PdfconverterService } from '../pdfconverter.service';
import { ApipdfconverterService } from '../apipdfconverter.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  csvContent!: string;
  counter:any = 0;
  constructor(private api: ApipdfconverterService){


  }

  //@HostListener('drop',['$event'])
  onDrop(event:any): void{
    event.preventDefault();      
    console.log(event.dataTransfer.files);

    alert("dropped file")

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      

      const fileName = files[0].name;
      console.log(`Selected file name: ${fileName}`);
    }
  }

  onDragOver(event:any): void{
    this.counter+= 1;
    //console.log(this.counter)
    event.preventDefault();      
   
  }

  onFileChosen(event:any):void{

    console.log(event.target.files)
    let files = event.target.files
    console.log("WORKING");
      /**/this.api.convertPDFtoCSV(files[0]).subscribe ((res)=>{
        alert("HELLO")
        console.log(res)
        alert("HELLO")

      })
      alert("&&&&&&&&&&&")
  }


  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        alert("successful")
    }

  }

}
