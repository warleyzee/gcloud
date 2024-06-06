import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PdfUpload from '../PdfUpload/UploadPdf';
import PdfViewer from '../pdfViewer/PdfViewer';

function PdfList() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const loadPdfs = () => {
    axios.get('http://localhost:5500/pdfs')
      .then((response) => {
        setPdfs(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter lista de PDFs:', error);
      });
  };

  useEffect(() => {
    loadPdfs();
  }, []);

  return (
    <div>
      <h2>Lista de PDFs</h2>
      <PdfUpload onUploadSuccess={loadPdfs} />
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.name} onClick={() => setSelectedPdf(pdf.url)}>
            <a href="#" onClick={(e) => e.preventDefault()}>{pdf.name}</a>
          </li>
        ))}
      </ul>
      {selectedPdf && (
        <div>
          <h3>Visualizando: {selectedPdf}</h3>
          <PdfViewer url={selectedPdf} />
        </div>
      )}
    </div>
  );
}

export default PdfList;
