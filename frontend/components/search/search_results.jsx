import React from 'react';
import { withRouter, Link } from 'react-router';
import BusinessMap from '../map/business_map';

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.renderStars = this.renderStars.bind(this)
    this.renderSearchResults = this.renderSearchResults.bind(this)
  }

  componentWillMount(){
    this.props.fetchResults(this.props.location.query.query)
  }

  componentWillReceiveProps (newProps){
    if (newProps.location) {
      if (this.props.location.query.query !== newProps.location.query.query) {
        this.props.fetchResults(newProps.location.query.query)
      }
    }
  }

  renderStars(ratings) {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= ratings ? 'active_star' : 'no_star'} key={ele}>☆</span>
      )
    })
  }

  renderSearchResults(props) {
    if(props.results.length < 1) {
      return (
        <div className='business__search-item-error'>
          <div>No Results for
            <span className="business__search-item-query"> {`${props.location.query.query}`}</span>
          </div>
          <div>please try another keyword </div>
        </div>
      )
    } else {
      return props.results.map( business => {
          return (
          <div key={`bizness-${business.id}`} className='business__search-item'>

            <div className='business__search-left'>
            <div className="business__search-index-item">
              <Link className="business__search-pic" to={`/businesses/${business.id}`}>{business.name}</Link>
              <div>{this.renderStars(business.ratings)}</div>
              <div>{business.review_count} Reviews</div>
              <div>{business.price}</div>
            </div>
            </div>
            <ul className="business__search-right">
                <li>{business.street}</li>
                <li>{business.city}</li>
                <li>{business.state}, {business.zip}</li>
                <li>{business.phone}</li>
            </ul>
          </div>
          )
        }
      )
    }
  }

  render() {
    return (
      <div className="business__search-parent">
        <div className="business__search-container">
          <div className="business__search-index-box">
            {this.renderSearchResults(this.props)}
          </div>
          <div className="business__search-map-box">
            <BusinessMap
              results={this.props.results}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchResults)
