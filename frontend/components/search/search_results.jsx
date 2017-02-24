import React from 'react';
import { Link } from 'react-router';
import BusinessMap from '../map/business_map'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchResults(this.props.location.query.query)
  }

  componentWillReceiveProps (newProps){
    if (newProps.location) {
      if (this.props.location.query.query !== newProps.location.query.query) {
        // console.log("this.props", this.props.location.query.query)
        // console.log("newProps", newProps.location.query.query)
        this.props.fetchResults(newProps.location.query.query)
      }
    }
  }

  render(){
    console.log("Hit Render", this.props.results)
    return (
      <div className="business__search-index-box">
        {
          this.props.results.map( business => {
            return (
              <li key={`bizness-${business.id}`} className="business__search-index-item">
                <Link className="business__search-pic" to={`/businesses/${business.id}`}>{business.name}</Link>
                <ul className="business__search-index-box">
                  <li>{business.name}</li>
                  <li>{business.street}</li>
                  <li>{business.city}</li>
                  <li>{business.state}</li>
                  <li>{business.zip}</li>
                  <li>{business.phone}</li>
                </ul>
              </li>
            )
          }
          )
        }
      </div>
    )
  }
}

export default SearchResults
