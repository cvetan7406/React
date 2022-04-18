// import React, { Component } from "react";

// class Data extends Component{
//     constructor(props){
//         super(props);
        
//         this.state = {
//             dataIsloaded    : false,
//             items           : []
//         };
        
//     }
//     componentDidMount(){
//         const API = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E5wuuKKgyA3aFZPjAT80A9PUMoEmGVWK";
//         fetch(API)
//         .then((res) => res.json())
//         .then((json) => {
//             this.setState({
//                 items           :json,
//                 dataIsloaded    :true 
//             });
//         })
//     }

// }
// export default Data;