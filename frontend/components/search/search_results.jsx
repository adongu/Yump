import React from 'react';

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      results: []
    }
  }

  componentWillReceiveProps (newProps){
    this.setState(this.props.results)
  }

  render(){
    console.log(this.state.results)
    return(
      <div className="business__index-box">
        {
          this.state.results.map( business => {
            return (
              <li key={business.id} className="business__index-item">
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
    )
  }
}

export default SearchResults
