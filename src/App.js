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
      // this.state objekti jonka kohtia muutetaan ohjelmassa dynaamisesti
      // tällä hallitaan fun-listaa ja hakukentän näkyvyyttä
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
               
        // muuttuja arraylle johon kerätään id:t arvontaa varten
        let idList = [];
        
        // funktio jolla luodaan array id:stä
        function makeIdArray() {
            for (let i=0; i<funs.length; i++) {
                idList.push(funs[i].id);
            }
            return idList;
        }
        
        makeIdArray();
        
        // funktio jolla arvotaan random id listasta
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
          // yhdistetään nimi ja kuvaus yhdeksi stringiksi hakua varten
          const funValues = funName.concat(funDescription);
          
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
    

      // if else sitä varten että kestää kauan ladata. Muokkaa myöhemmin paremmaks
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
