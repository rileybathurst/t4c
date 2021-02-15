import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

function Photos(props) {
  return <li className="blocks-gallery-item">
    <img src={props.photoSrc} alt={props.photoAlt} loading="lazy" />
  </li>
}

function Loop(props) {
  return <>{props.circle}</>
}

// I would not say this is pretty but it does work
function Numbers(props) {
  const numbers = [1, 2, 3, 4, 5, 'six'];
  const listItems = numbers.map(number =>  <li>{number}</li>); 

  // const bigger = 3 > listItems;

  return <>{listItems}</>
}



export default class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        selectOptions : [],
        id: "",
        team_name: "",
        team_sport: ""
      }
    }
  
   async getOptions(){
      const res = await axios.get('http://167.99.108.163/teams')
      const data = res.data
  
      const options = data.map(d => ({
        "value" : d.team_sport,
        "label" : d.team_name,
      }))

      this.setState({selectOptions: options})
    }
  
    handleChange(e){
     this.setState({
        id:e.value, 
        team_name:e.label, 
        team_sport:e.value,
      })
    }
  
    componentDidMount(){
        this.getOptions()
    }
  
    render() {
      console.log(this.state.selectOptions)
      return (
        <div>
          <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
          <p>You have selected <strong>{this.state.id}</strong></p>
          <p>they include these {this.state.team_name}</p>

          <Numbers />

          {/* this doesnt work as it needs to be wrapped in a function? */}
          {/* {this.state.selectOptions} */}

          <Loop circle={this.state.selectOptions} />



{/*           {this.state.id}
          {this.state.team_sport} */}

          {/* this doesnt work as its not in the set state but can we pull from above? */}
          {/* {this.state.selectOptions.map(kids => <>{kids}</>)} */}

          {/* <Select options={this.state.selectOptions} className="breaker" /> */}
          {/* <Loop circle={this.state.selectOptions.map(round =>  {})} /> */}

          {/* {this.state.options.map(kids => <>{kids}</>) } */}

        </div>
      )
    }
}


{/* Priest 2 implementation of gallery
<Gallery loop={data.strapiService.gallery.map(photos => <Photos photoSrc={photos.url} /> )} /> */}