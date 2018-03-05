import React, { Component } from 'react'
import './App.css'

import { translate } from 'react-i18next'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => { changeLanguage('th') }}>TH</button>
          <button onClick={() => { changeLanguage('en') }}>EN</button>
        </header>

        <div className="content">
          <h1>{t('title')}</h1>
          <p>{t('content')}</p>
        </div>
      </div>
    )
  }
}

export default translate('trans')(App)
