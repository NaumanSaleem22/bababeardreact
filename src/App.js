import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Components/Header'
import Shop from './Shop';
import FAQS from './FAQS';
import Ingredients from './Ingredients';
import About from './About';
import ReplacingPolicy from './ReplacingPolicy';
import RefundPolicy from './RefundPolicy';
import RewardPolicy from './RewardPolicy';
import Blogs from './Blogs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './Components/Services';
import Footer from './Components/Footer';
 
 
import Scrollableimage from './Components/ScrollableImage';
 
function App() {
  return (
 


   <Router>
     
     
     <Header/>
        <Route path="/" component={Home} exact/>
        <Route path="/about-us" component={About}/>
        <Route path="/ingredients" component={Ingredients}/>
        <Route path="/RefundPolicy" component={RefundPolicy}/>
        <Route path="/RewardPolicy" component={RewardPolicy}/>
        <Route path="/ReplacingPolicy" component={ReplacingPolicy}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/faqs" component={FAQS}/>
        
        <Route path="/blogs" component={Blogs}/>
        <Route path="/Services" component={Services}/>
        <Route path="/Footer" component={Footer}/>
       
        <Route path="/ScrollableImage" component={Scrollableimage}/>
   </Router>
  );
}

export default App;
