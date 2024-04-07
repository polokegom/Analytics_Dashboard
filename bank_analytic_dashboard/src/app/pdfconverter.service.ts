import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

@Injectable({
  providedIn: 'root'
})
export class PdfconverterService {

  constructor() {}


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
  }

}
