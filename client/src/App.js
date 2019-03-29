import React from 'react';
import CompaniesListPage from './pages/CompaniesListPage'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CompanyAnalysisPage from './pages/CompanyAnalysisPage'
import NavbarCustom from './components/NavbarCustom'


const App = () => {
  return (

    <Router>
      <React.Fragment>
        <NavbarCustom />
        <Route exact path='/companies'component={CompaniesListPage} />
        <Route path='/companies/:companyId'
        render={({ match }) => <CompanyAnalysisPage companyId={match.params.companyId}/>}/>
      </React.Fragment>
    </Router>
  ) 
}




export default App;