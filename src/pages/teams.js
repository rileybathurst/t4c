import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        selectOptions : [],
        id: "",
        team_name: ""
      }
    }
  
   async getOptions(){
      const res = await axios.get('http://167.99.108.163/teams')
      const data = res.data
  
      const options = data.map(d => ({
        "value" : d.id,
        "label" : d.team_name  
      }))

      this.setState({selectOptions: options})
    }
  
    handleChange(e){
     this.setState({id:e.value, team_name:e.label})
    }
  
    componentDidMount(){
        this.getOptions()
    }
  
    render() {
    //   console.log(this.state.selectOptions)
      return (
        <div>
          <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
          <p>You have selected <strong>{this.state.team_name}</strong> whose id is <strong>{this.state.id}</strong></p>
        </div>
      )
    }
}