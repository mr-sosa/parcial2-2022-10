import { LOCALES } from './i18n/locales';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import messages from './i18n/messages';
import { NavBar } from './shared/components/NavBar';
import { PokemonList } from './pages/pokemon-list/PokemonList';
import './App.scss';
import { BarChart } from './pages/chart/BarChart';

function App() {
  const [language, setLanguage] = useState(LOCALES.SPANISH);
  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<PokemonList ln={language}></PokemonList>} />
            <Route exact path='/report' element={<BarChart></BarChart>} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </IntlProvider>
    </>
  );
}

export default App;
