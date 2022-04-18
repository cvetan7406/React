
import React, { Component } from "react";
import  './App.css';
import { LineChart } from "./components/LineChart";
import { PieChart  } from "./components/PieChart";


class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
        dataIsloaded    : false,
        items           : []
    };
    
}
componentDidMount(){
    const API = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E5wuuKKgyA3aFZPjAT80A9PUMoEmGVWK";
    fetch(API)
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items           :json,
            dataIsloaded    :true 
        });
    })
    
}

  render(){ 
    const { items } = this.state;
    //TODO Change Source from static to API method
    console.log( );

    
    return (
        <div className="App">
            <div>
              <div className="PieChart">
                  {PieChart()}
              </div>
              <div className="LineChart">
                  {LineChart()}
              </div>
            </div>  
        </div>
      );
  }
}

export default App;
