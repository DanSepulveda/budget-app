import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

const App = () => {
  const [lang, setLang] = useState('en')

  return (
    <BrowserRouter>
      <Header lang={lang} setLang={setLang} />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/transactions' component={Transactions} />
        </Switch>
      </Layout>
      <Footer lang={lang} />
    </BrowserRouter>
  )
}

export default App