import React from 'react';
import { Link, withRouter } from 'react-router';
import BusinessIndexPageItem from './business_index_page_item';
import { fetchBusinesses } from '../../actions/business_actions';


class BusinessIndexPage extends React.Component {

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  render () {
    return (
      <div className="business__index-box">
          <div className="home__search-box">
            <div className="home__logo-box">
              <Link to="/" activeClassName="current">
                <img
                  className="home__logo"
                  src={ window.assets.logo }
                />
              </Link>

            </div>
          </div>
        {
          this.props.businesses.map( business => {
            return (
              <BusinessIndexPageItem
                key={business.id}
                business={business}
              />
            )
          }
          )
        }
      </div>
    )
  }
}

export default withRouter(BusinessIndexPage);
