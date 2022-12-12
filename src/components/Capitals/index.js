import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({
      activeCapitalId: event.target.value,
    })
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const activeCountryName = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return activeCountryName.country
  }

  render() {
    const {activeCapitalId} = this.state
    // console.log(activeCapitalId)
    const country = this.getCountryName(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="capitals-card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="capitals-container">
            <select
              className="select-country"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h className="country-name">{country}</h>
        </div>
      </div>
    )
  }
}

export default Capitals
