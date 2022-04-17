
import React, { Component } from "react";
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
    if(!dataIsloaded)return <div><h1>
        Please wait some time....
        </h1></div>;
    return (
        <div className="App">
          <h1>Fetch data from an api in react </h1>{
               items.map((item) => {item.results.lists[704].books.primary_isbn10} )
                
            }


        </div>
      );
  }
}

export default App;
