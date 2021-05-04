
import { CharacterList} from './components/CharacterList'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  CharacterDetails from  './components/CharacterDetails'

import { connect } from 'react-redux'

function App({loading, post, err}) {

  return (
    <Router >
      <Switch>
          <Route exact path='/'>
            <CharacterList data={post} loading={loading} err={err} />
          </Route>
          <Route path="/character-details/:name">
              <CharacterDetails />
          </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})


export default connect(mapStateToProps)(App);
