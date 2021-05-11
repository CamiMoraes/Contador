import './App.css';

import React from 'react'

import Contador from './components/Contador'
import Card from './components/layout/Card';

export default () => (

    <div className="App">
      <h1>Contador</h1>

    <div className="Cards">
      <Card titulo="Contador dos litros de água ingeridos (beba água!)" color="#bdfff3">
        <Contador numero Inicial={0} />
      </Card>

      </div>
      </div>
  );

