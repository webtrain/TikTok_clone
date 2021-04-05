import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';
// import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/upload" component={Upload} />
        <Route path="/" component={Home} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default App;
