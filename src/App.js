import React from 'react'
import './App.css'
import i18n from './i18n'

import { translate } from 'react-i18next'

const App = ({ t }) => (
  <div className="App">
    <header className="App-header">
      <button onClick={() => { i18n.changeLanguage('th') }}>TH</button>
      <button onClick={() => { i18n.changeLanguage('en') }}>EN</button>
    </header>

    <div className="content">
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
    </div>
  </div>
)

export default translate('trans')(App)
