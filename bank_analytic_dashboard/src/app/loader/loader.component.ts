import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  csvContent!: string;
  counter:any = 0;
  constructor(){


  }

  //@HostListener('drop',['$event'])
  onDrop(event:any): void{
    event.preventDefault();      
    console.log(event.dataTransfer.files);

    alert("dropped file")

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log("WORKING");

      const fileName = files[0].name;
      console.log(`Selected file name: ${fileName}`);
    }
  }

  onDragOver(event:any): void{
    this.counter+= 1;
    //console.log(this.counter)
    event.preventDefault();      
   
  }


  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        alert("successful")
    }

  }

}
