import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Random from './components/Random';
import FunList from './components/FunList';
import SearchContainer from './components/SearchContainer';
import SearchField from './components/SearchField';
import Time from './components/Time';
import CategoriesSearch from './components/CategoriesSearch';
import { funs } from './funExample';
// import SearchContainer from './components/SearchContainer';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get a Life</h1>
        <Random /> 
      </header>
      <SearchContainer />
    </div>
  );
} */


class App extends Component {
  constructor() {
      super()
      // this.state on se joka muuttuu ohjelmassa dynaamisesti, 
      // tässä robotti-array (joka aluksi tyhjä) ja hakukenttä
      this.state = {
          funs: [],
          searchvalue: '',
          isHidden: true,
          random: 0,
          showRandom: false
      }
  }

  componentDidMount() {
      // fetch tekee http-requestin
      /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
          return response.json();
      })
      .then(users => {
          
      }); */
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

  // nimi on keksitty, ei varattu
  onSearchChange = (event) => {
      this.setState({ searchvalue: event.target.value })
  }

  onRandomChange = (event) => {
    
          function makeRandomId(idArray) {
        
            return idArray[Math.floor(Math.random()*idArray.length)];
                
        }
        
            // let idList = [254, 45, 212, 365, 2543];
        let idList = [];
        console.log(funs[0].id);
        console.log(funs);
        
        function makeIdArray() {
            for (let i=0; i<funs.length; i++) {
                idList.push(funs[i].id);
            }
            return idList;
        }
        
        makeIdArray();
        console.log(idList);
        
        let randomId = makeRandomId(idList);
        
        console.log(randomId);

        this.setState({ random: randomId, showRandom: true, isHidden: true })

  }

  render() {
      
    // muuttuja randomFun joka ei filtteröi vaan näyttää idn joka random
    // const randomFun = this.state.funs.id hmm... 
    
    const filteredFuns = this.state.funs.filter(fun => {
        
          // muuttujat näille: 
          // fun.name.toLowerCase()
          // fun.description.toLowerCase()
          // fun.category.toLowerCase()
          // fun.duration.toLowerCase()
          
          // yhdistä sitten stringit yhdeksi josta haet

          const funName = fun.name.toLowerCase();
          const funDescription = fun.description.toLowerCase();
          const funValues = funName.concat(funDescription);
          // const funId = fun.id;

          
          // if (this.random === funId) {
           // return funId.includes(this.state.randomId);
          // }
          
            return funValues.includes(this.state.searchvalue.toLowerCase());
          
      })
    
    const randomFuns = this.state.funs.filter(fun => {
      // palauttaa funin jonka id on sama kuin nykyisen staten random
      return fun.id === this.state.random;

    })
    
    let displayFuns = filteredFuns;

    if (this.state.showRandom) {
      displayFuns = randomFuns;
    } else {
      displayFuns = filteredFuns;
    }
    
    // const randomFuns = funs.find(function(element) {
    //   return element.id === 3;
    // }); 


      // if else sitä varten että kestää kauan ladata, ei muuta syytä! Voi siis jättää pois
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
                        {/* <Time />
                        <CategoriesSearch /> */}
                      </SearchContainer>
                    }
                  </div>

                 { console.log('state random ' + this.state.random) }

    
                        <FunList funs={displayFuns}/>
                
              </div>
          );
      }
      
  }
  
}

export default App;
