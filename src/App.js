import React, { Component } from 'react';
import './App.css';
import TotoList from './component/totoList.js';
import tick from './img/tick.svg';
class App extends Component {
  constructor (){
    super(); 
    this.state = {
      valueinput : '',
      current : [
        {title :'Nam',isComplete : false},
        {title :'ble' ,isComplete : false}, 
        {title :'facebook' , isComplete : false}
    ]};
    this.checkAll       = this.checkAll.bind(this);
    this.onKeyUp        = this.onKeyUp.bind(this);
    this.inpputOnChange = this.inpputOnChange.bind(this);
  };

  handingEvent(item ){
    return(event) => {
      const isComplete = item.isComplete;
      const { current } = this.state; 
      const index = current.indexOf(item);
      this.setState ({
          current : [
            ...current.slice(0,index),
                { 
                  ...item,
                  isComplete : !isComplete
                },
              ...current.slice(index + 1),
          ],
      });
    };
  };

  checkAll ( ) {
    
  }

  onKeyUp (event ) {
    // console.log( event.target.value)
    if(event.keyCode === 13){
      let value = event.target.value;
      if(!value) { return; }
      value = value.trim();
      if(!value) { return; }
      this.setState ({
        valueinput : '',
        current : [
          {
            title : value,
            isComplete : false
          },
          ...this.state.current
        ]
      })
    }
  }

  inpputOnChange (e) {
    this.setState ({
      valueinput : e.target.value
    });
  }

  render (){
    return (
      
      <div className="App">
        <div className="header">
          <img onClick = { this.checkAll } src={tick} height="30px" width = "30px"/>
          <input 
            onChange= {this.inpputOnChange} 
            value={this.state.valueinput} 
            onKeyUp = { this.onKeyUp } 
            type="text" placeholder="enter item"/>
        </div>
        {
          this.state.current.map ((items , index) => 
                              <TotoList 
                                      onClick = { this.handingEvent(items)}
                                      key ={ index } items ={ items } />)
        }
      </div> );

   };
};

export default App;
