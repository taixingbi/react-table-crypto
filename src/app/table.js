import React, { Component } from 'react';

import {AxiosGet} from "./api_axios";
import MaterialTable from "material-table";
import Popup from "./popup";

// import {Link } from "react-router-dom";
// import { SystemUpdate } from '@material-ui/icons';

const columns =  [
  {
    title: "Id",
    field: "id",
  },
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Symbol",
    field: "symbol",
  },

  {
    title: "Time",
    field: "time",
  },

  {
    title: "Price",
    field: "price",
    render: row => 
      <div onClick={ () => { console.log(row.url); }  }> 
        <a href={ row.url }> {row.price} </a>
      </div>
  },
  {
    title: "Note",
    field: "note",
    render: row => 
      <div onClick={ () => { console.log(row.tag); }}> 
        <Popup value={{ value: row.tag }} />
      </div>
  },
  {
    title: "Purchase",
    field: "purchase",
    render: row => 
      <div onClick={ () => { console.log(row.tag); }}> 
        <a href={ `/purchase/${row.symbol}` }> {row.symbol}</a>
      </div>
  }

];

const data = [
  // { id: 1, name: null, symbol: null,  time: null, price: null, note: "null",},
  // { id: 2, name: null, symbol: null, time: null, price: null,  note: "null"},
  // { id: 3, name: null, symbol: null, time: null , price: null, note: "null"},
];

const favarites = ["doge", "btc", "shib"];


class App extends Component {

  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      columns: columns,
      data: data,
    };
  } 

  getCrypto = async () => {
    let raw_data= await AxiosGet();
    let data= [];

    for(let i=0; i<raw_data.length; i++){
      let item= {};
      //name
      item.name= raw_data[i].id;
      //symbol
      item.symbol= raw_data[i].symbol;
      //time
      let current_time= raw_data[i].last_updated;
      item.time= new Date(current_time).toLocaleString();
      //price
      item.price= "$" + raw_data[i].market_data.current_price.usd;
      //id
      item.id= i+1;

      // url 
      item.url= 'https://www.blockchain.com/prices/' + item.symbol;

      // tag 
      item.tag= "edit";

      //favarite
      item.favarite= 0;
      if( favarites.includes(item.symbol)  )  item.favarite= 1;

      data.push(item);
    }

    function compare( a, b ) {
      if(a.favarite > b.favarite)  return -1; 
      return 1;
    }
    
    data.sort( compare );
    console.log(data);

    this.setState({ data: data }) 
  }

  async componentDidMount() {
    await this.getCrypto();
    // this.interval = setInterval(() =>  this.sensors(), 5000);
  }

  render() {
    const {data, columns}= this.state

    return (
    <div>
        <div>
            <MaterialTable title="Crypto" data={data} columns={columns} />
        </div>
    </div>
    );
  }
}

export default App;
