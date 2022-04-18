
import React, { Component } from "react";
import  './App.css';
import { LineChart } from "./components/LineChart";
import { PieChart  } from "./components/PieChart";
// import {DataSetGeter} from "./DataControler/dataSetGeter";

class App extends Component{
  
    render(){
    // const { dataIsloaded, items}  = this.state;
    // if(!dataIsloaded)return <div className="notice"><h1>
    //     Please wait some time....
    //     </h1></div>;

    // console.log(items.results.lists[0].list_id)
  
 
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
