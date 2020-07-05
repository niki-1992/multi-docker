import React, { Component } from 'react'
import {Header} from './Header'
import axios from 'axios'

class Fib extends Component {
  state = {
    seenIndexes : [],
    values: {},
    index: ''
  }

  async componentDidMount(){
    await this.fetchValues()
    await this.fetchIndexes()
  }

  async fetchValues(){
    const { data } = await axios.get('/api/values/current')
    this.setState({values: data})
  }

  async fetchIndexes(){
    const { data } = await axios.get('/api/values/all')
    this.setState({seenIndexes: data})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('/api/values', {
      index: this.state.index
    })
    this.setState({index: ''})
  }

  renderSeenIndexes = () => {
    return (
    this.state.seenIndexes.map(({number}) => number).join(', ')
    )}

  renderValues = () => {
    const entries = []
    const { values } = this.state

    for(let key in values){
      entries.push(
      <div className='panel' key={key} style={{padding: '1rem', margin: '.25rem'}}>
        For index {key}, I calculated {values[key]}
      </div>
      )
    }
    return entries
  }

  render(){
    return (
      <div>
      <Header />
       
        <form className='flex-center' onSubmit={this.handleSubmit}>
          <label className='flex-center form-label'>
            ENTER AN INDEX
          </label>
          <input
            className="form-input"
            value={this.state.index}
            style={{width: '10%', margin: '2rem 0'}}
            onChange={(e) => this.setState({index: e.target.value})}
          />
          <button className='btn'>
          Submit
          </button>
        </form>
        <h3 className='flex-center'>
          Indexes I have seen
        </h3>
        <div className='flex-center'>
          {this.renderSeenIndexes()}
        </div>
        <div className='flex-center'>
          Calculated values
          {this.renderValues().map(value => {
            return <div>{value}</div>
          })}
        </div>
      </div>
    )
  }
}

export default Fib