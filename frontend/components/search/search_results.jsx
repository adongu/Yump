import React from 'react';

class SearchResults extends React.Component {
  constructor (props) {
    super(props)

  }

  componentDidMount(){
    this.props.fetchResults(this.props.location.query.query)
  }

  componentWillReceiveProps (newProps){
    // if (newProps) {
      if (this.props.location.query.query !== newProps.location.query.query) {
        console.log("this.props", this.props.location.query.query)
        console.log("newProps", newProps.location.query.query)
        this.props.fetchResults(newProps.location.query.query)
      }
    // }
  }

  render(){
    console.log("Hit Render", this.props.results)
    return(
      <div className="business__index-box">
        {
          this.props.results.map( business => {
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
