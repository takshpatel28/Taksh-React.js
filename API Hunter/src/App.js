import React from 'react';
import AllRoutes from './Routes/AllRoutes'
import { AuthProvider } from './Context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AllRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
