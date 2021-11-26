import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/transactions' component={Transactions} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default App