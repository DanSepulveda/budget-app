import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import History from './pages/History'

const App = () => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (!lang) {
      localStorage.setItem('lang', 'en')
      setLang('en')
    } else {
      setLang(lang)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header lang={lang} setLang={setLang} />
      <Layout>
        <Switch>
          <Route exact path='/' render={() => <Home lang={lang} />} />
          <Route path='/transactions' render={() => <History lang={lang} />} />
        </Switch>
      </Layout>
      <Footer lang={lang} />
    </BrowserRouter>
  )
}

export default App