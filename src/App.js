
import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js';
import { Doughnut,  Line } from 'react-chartjs-2';
import Ads from "./chart"
import  './App.css'



const API = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E5wuuKKgyA3aFZPjAT80A9PUMoEmGVWK";


ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    );

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function chart() {
  return <Doughnut data={data}  />;
}

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','July','July','July'];
  
  export const dataLine = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4,5,6,87,9,9],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [1,2,3,4,5,6,87,9,9],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  export function LineChart() {
    return <Line options={options} data={dataLine} />;
  }
  



class App extends   Component{
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
            <div className="PieChart">
                {chart()}
            </div>
            <div className="PieChart">
                {LineChart()}
            </div>
           
            {/* <Ads/>     */}
            
        </div>
      );
  }
}

export default App;
