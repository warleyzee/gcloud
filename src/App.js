// import PdfList from './components/pdfComponents/pdfList/PdfList'

// function App() {
//   return (
//     <div>
//       <PdfList />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import Login from './components/pages/login/Login';
import PdfList from './components/pdfComponents/pdfList/PdfList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <PdfList />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
