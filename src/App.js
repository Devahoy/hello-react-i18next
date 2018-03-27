import React from 'react'
import './App.css'
import i18n from './i18n'

import { translate } from 'react-i18next'

const App = ({ t }) => (
  <div className="App">
    <section className="hero is-info">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title">{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
        </div>
      </div>
    </section>

    <div className="language-button-section">
      <span>{t('lang_text')}</span>
      <button className="button" onClick={() => { i18n.changeLanguage('th') }}>{t('lang_th')}</button>
      <button className="button" onClick={() => { i18n.changeLanguage('en') }}>{t('lang_en')}</button>
    </div>

    <div className="container columns">
      <div className="column is-8 is-offset-4">
        <div className="box normal-content">
          <h3 className="title">{t('header')}</h3>
          <p>{t('content')}</p>
        </div>

        <div className="box interpolate-content">
          <p>{t('welcome_message', { name: 'Chai Phonbopit', website: 'devahoy.com'})}</p>
        </div>

        <div className="box info">
          <h3 className="title">{t('read_more')}</h3>
          <ul>
            <li><strong>{t('post')}</strong> <a href="https://devahoy.com/posts/getting-started-with-react-18next/" target="_blank">วิธีการทำ React 2 ภาษาด้วย React i18n-next</a></li>
            <li><strong>{t('source_code')}</strong> <a href="https://github.com/Devahoy/hello-react-i18next" target="_blank">hello-react-i18next</a></li>
          </ul>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>Powered by <a href="https://devahoy.com" target="_blank">devahoy.com</a></p>
        </div>
      </div>
    </footer>
  </div>
)

export default translate()(App)
