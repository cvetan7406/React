
import React, { Component } from "react";
import { Chart, Doughnut, Pie } from 'react-chartjs-2';
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
  
    return (
        <div className="App">
            
            
           

        </div>
      );
  }
}

export default App;
