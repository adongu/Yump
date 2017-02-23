import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor (props) {
    super(props)

  }

  componentDidMount(){
    this.props.fetchResults(this.props.location.query.query)
  }

  render(){
    console.log("Hit Render", this.props.results)
    return(
    <div>
      <div className="business__index-box">
        {
          this.props.results.map( business => {
            return (
              <li key={"bizness"-business.id} className="business__index-item">
                <Link className="business__pic" to={`/businesses/${business.id}`}>{business.name}</Link>
                <ul className="business__index-item-box">
                  <li>{business.name}</li>
                  <li>{business.street}</li>
                  <li>{business.city}</li>
                  <li>{business.state}</li>
                  <li>{business.zip}</li>
                  <li>{business.phone}</li>
                  <li>{business.latitude}</li>
                  <li>{business.longitude}</li>
                </ul>
              </li>
            )
          }
          )
        }
      </div>
      <div className="business__index-map">
        <business__index-map
          center={}
          coorderinates={}
        />
      </div>
    </div>
    )
  }
}

export default SearchResults
