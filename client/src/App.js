import React from 'react';
import CompaniesListPage from './pages/CompaniesListPage'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CompanyAnalysisPage from './pages/CompanyAnalysisPage'

const App = () => {
  return (
    <Router>
      <Route exact path='/companies'component={CompaniesListPage} />
      <Route path='/companies/:companyId'
        render={({ match }) => <CompanyAnalysisPage companyId={match.params.companyId}/>}/>
    </Router>
  ) 
}




export default App;