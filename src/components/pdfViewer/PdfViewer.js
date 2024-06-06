import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import { Pages, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Obter a versão do pdf.js do pacote react-pdf
const pdfjsVersion = pdfjs.version;

// Definir a URL do worker globalmente
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

function PdfViewer({ url }) {
  return (
    <div style={{ width: '100%' }}>
      <Document
        file={url}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PdfViewer;
