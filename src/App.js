import React, {Component} from 'react';
import Filter from './Components/Filters'
import SortButtons from './Components/SortButtons'
import Cars from './Components/Cars'
import CarData from './CarData.js'
import './App.css';

export class App extends Component {

  constructor (props){
  super(props);
  this.state = {
          make: "",
          transmission: "",
          selectedOption: ""
      };
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleFilterChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleOptionChange(e) {
    if(e.target.value === "option1"){
      CarData.sort((a, b) => (a.make < b.make) ? -1 : (a.make > b.make) ? 1 : 0);
    }else if(e.target.value === "option2"){  
      CarData.sort((a, b) => b.price - a.price);
    }else if(e.target.value === "option3"){  
      CarData.sort((a, b) => b.manufacture_year - a.manufacture_year);
    }
    this.setState({
      selectedOption: e.target.value
    })
  }

  render(){
    const holidaysAvailable = []
    CarData.forEach((holiday) =>
    {if(holiday.make.toUpperCase().includes(this.state.make.toUpperCase())){
        if(holiday.transmission.toUpperCase().includes(this.state.transmission.toUpperCase())){
            holidaysAvailable.push(
                <Cars cars={holiday} key={holiday.id} />
            )
        }
    }},
    )
    return (
      <div className="App">
        <header className="App-header">
          <h1>Car Search</h1>
        </header>
        <section className="innerWrapper">
          <Filter handleFilterChange={this.handleFilterChange}/>
          <SortButtons handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption} />
          {holidaysAvailable}
        </section>
      </div>
    );
  }
}

export default App;
