import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';
//import * as pdfParse from 'pdf-parse';
@Injectable({
  providedIn: 'root'
})
export class PdfconverterService {

  constructor() {}
/*

  async convertPdfToCsv(file: File): Promise<string> {
    const arrayBuffer = await this.readFileAsArrayBuffer(file);
    const text = await this.extractPdfText(arrayBuffer);
    return text;
  }

  private readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  }

  private async extractPdfText(arrayBuffer: ArrayBuffer): Promise<string> {
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const text = [];

    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      const page = pdfDoc.getPage(i + 1);
      const pageText = await page.doc.getTitle()
      text.push(pageText);
    }

    return text.join('\n');
  }



  async convertPdfToCsv(pdfFile: File): Promise<string> {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(pdfFile);

    return new Promise<string>((resolve, reject) => {
      fileReader.onload = async () => {
        const pdfData = new Uint8Array(fileReader.result as ArrayBuffer);
        try {
          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
          let csvContent = '';

          for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
            .filter((item): item is TextItem => (item as TextItem).str !== undefined) // Type guard to filter out TextMarkedContent
            .map((item: TextItem) => item.str)
            .join('\n');
            csvContent += pageText + '\n';
          }

          resolve(csvContent);
        } catch (error) {
          reject(error);
        }
      };

      fileReader.onerror = () => {
        reject('Error reading PDF file');
      };
    });
  }*/



  /*
  convertPdfToCsv2(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const buffer = e.target.result;
      //const bufferArray = new Uint8Array(buffer);
      //@ts-ignore
      pdfParse(buffer).then((data:any) => {
        const text = data.text;
        // Once you have the text content, you can format it as CSV
        console.log(text)
      });
    };
    reader.readAsArrayBuffer(file);
  }*/
  

}
