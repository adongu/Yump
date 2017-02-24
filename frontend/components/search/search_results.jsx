import React from 'react';
import { Link } from 'react-router';
import BusinessMap from '../map/business_map'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.renderStars = this.renderStars.bind(this)
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

  renderStars(ratings) {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= ratings ? 'active_star' : 'no_star'} key={ele}>☆</span>
      )
    })
  }

  render(){
    console.log("Hit Render", this.props.results)
    return (
    <div className="business__search-parent">
      <div className="business__search-index-box">
        {
          this.props.results.map( business => {
            return (
            <div key={`bizness-${business.id}`} className='business__search-item'>

              <div className='business__search-left'>
              <div className="business__search-index-item">
                <Link className="business__search-pic" to={`/businesses/${business.id}`}>{business.name}</Link>
                <div>{this.renderStars(business.ratings)}</div>
                <div>{business.review_count}</div>
                <div>{business.price}</div>
              </div>
              </div>
              <ul className="business__search-right">
                  <li>{business.street}</li>
                  <li>{business.city}</li>
                  <li>{business.state}</li>
                  <li>{business.zip}</li>
                  <li>{business.phone}</li>
              </ul>
            </div>
            )
          }
          )
        }
      </div>
    </div>
    )
  }
}

export default SearchResults
