import React, { useState } from 'react';
import axios from 'axios';

function UploadPdf( { onUploadSuccess }){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('http://localhost:5500/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('Sucesso:', response.data);
          onUploadSuccess();
        })
        .catch((error) => {
          console.error('Erro:', error);
        });
    } else {
      console.log('Nenhum arquivo selecionado.');
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
      {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
    </div>
  );
}

export default UploadPdf;

