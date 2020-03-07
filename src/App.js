import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Random from './components/Random';
import FunList from './components/FunList';
import SearchContainer from './components/SearchContainer';
import SearchField from './components/SearchField';
import { funs } from './funExample';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
    super()
    // this.state object, changes dynamically
    // this is used to control the fun list and visibility of the search field
    this.state = {
      funs: [],
      searchvalue: '',
      isHidden: true,
      random: 0,
      showRandom: false
    }
  }

  componentDidMount() {      
    this.setState({ funs: funs })
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
               
    // variable for the array of id:s to be used in returning random number
    let idList = [];
    
    // function for returning the id array
    function makeIdArray() {
      for (let i=0; i<funs.length; i++) {
        idList.push(funs[i].id);
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
        
      const funName = fun.name.toLowerCase();
      const funDescription = fun.description.toLowerCase();
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
    

    // if else is for those cases when it takes a long time to load the page. 
    // Make this better later
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
              <a onClick={this.toggleHidden.bind(this)} >
                Choose your own life >
              </a>
            </div>
            {!this.state.isHidden && 
              <SearchContainer>                        
                <SearchField searchChange={this.onSearchChange}/>                                               
              </SearchContainer>
            }
          </div>

          <FunList funs={displayFuns}/>

          <Footer />
          
        </div>

      );
    }   
  }
}

export default App;
