
import React, { Component, useState } from "react";
import BarChart from "./components/BarChart";
import {userData} from './data'


const API = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E5wuuKKgyA3aFZPjAT80A9PUMoEmGVWK";



class App extends React.Component{
    //конструктор
    constructor(props){
        super(props);
        
        this.state = {
            dataIsloaded    : false,
            items           : []
        };
    }


    
    componentDidMount(){
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
    const { dataIsloaded, items}  = this.state;
    if(!dataIsloaded)return <div className="notice"><h1>
        Please wait some time....
        </h1></div>;

    // console.log(items.results.lists[0].list_id)
    const [userData, setUserData] = useState()
    return (
        <div className="App">
            <BarChart
            
            />
        </div>
      );
  }
}

export default App;
