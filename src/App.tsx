import { useContext, useEffect } from 'react';
import { HomePage } from './components/pages/HomePage/HomePage';
import { ThemeContext } from './context/provider/ThemeProvider';
import Header from './components/molecules/Header/Header';

function App() {
  return (
    <div className=" h-[100vh]">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
