import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Random from './components/Random';
import FunList from './components/FunList';
import SearchContainer from './components/SearchContainer';
import SearchField from './components/SearchField';
import Footer from './components/Footer';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    // this.state object, changes dynamically
    // this is used to control the fun list and visibility of the search field
    this.state = {
      funs: [],
      isLoading: true,
      errors: null,
      searchvalue: '',
      isHidden: true,
      random: 0,
      showRandom: false
    }
  }

  getFuns() {
    axios
      // This is where the data is hosted
      .get("https://www.juttahyrskylahti.fi/wp-json/wp/v2/activities?per_page=100")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          funs: response.data,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }


  componentDidMount() {      
    this.getFuns();
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden,
      showRandom: false 
    })
    if (this.state.isHidden) {
      this.setState ({
        searchvalue: ''
      })
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchvalue: event.target.value })
  }

 

  onRandomChange = (event) => {
    
    // variable for current activities
    let funsListed = this.state.funs;
    
    // variable for the array of id:s to be used in returning random number
    let idList = [];
    
    // function for returning the id array
    function makeIdArray() {
      for (let i=0; i<funsListed.length; i++) {
        idList.push(funsListed[i].id);
      }
      return idList;
    }
    
    makeIdArray();
    
    // function for returning random id from the id array
    function makeRandomId(idArray) {        
      return idArray[Math.floor(Math.random()*idArray.length)];                
    }

    let randomId = makeRandomId(idList);

    this.setState({ random: randomId, showRandom: true, isHidden: true })

  }

  render() {
    
    const filteredFuns = this.state.funs.filter(fun => {
        
      const funName = fun.title.rendered.toLowerCase();
      const funDescription = fun.activity_description.toLowerCase();
      // combining name and description to one string for the search
      const funValues = funName.concat(funDescription);
      
      return funValues.includes(this.state.searchvalue.toLowerCase());
          
    })
    
    const randomFuns = this.state.funs.filter(fun => {
      // returns the fun which has the same id as the random id in the current state
      return fun.id === this.state.random;

    })
    
    let displayFuns = filteredFuns;

    if (this.state.showRandom) {
      displayFuns = randomFuns;
    } else {
      displayFuns = filteredFuns;
    }
    
    const { isLoading } = this.state;
    

    // if else is for those cases when it takes a long time to load the page. 
    
    if (this.state.funs.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
      return (
          
        <div className='container'>
          
          <Header />

          <Random randomChange={this.onRandomChange} /> 

          <div>
            <div className='searchLink'>
              {/* <a onClick={this.toggleHidden.bind(this)} >
                Choose your own life >
              </a> */}
              <button className="link" onClick={this.toggleHidden.bind(this)} >
                Choose your own life ></button>
            </div>
            {!this.state.isHidden && 
              <SearchContainer>                        
                <SearchField searchChange={this.onSearchChange}/>                                               
              </SearchContainer>
            }
          </div>
          
          {!isLoading ? (

           <FunList funs={displayFuns}/> 

           ) : (
            <p>Loading...</p>
          )}
          

          <Footer />
          
        </div>

      );
    }   
  }
}

export default App;
