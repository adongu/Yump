import React from 'react';
import { Link, withRouter } from 'react-router';
import BusinessIndexPageItem from './business_index_page_item';
import { fetchBusinesses } from '../../actions/business_actions';
import headerBar from '../header/header_bar';
import HomePageContainer from '../home_page/home_page_container';

class BusinessIndexPage extends React.Component {

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  render () {
    return (
    <div>
      <div className="home__header-bar-content">
        <div className="home__header-bar-logo-box">
          <Link to="/" activeClassName="current">
            <img
              className="home__header-bar-logo"
              src={ window.assets.logo }
              />
          </Link>

          <div className="home__header-search-box">
            <input placeholder="Search"/>
          </div>
        </div>
      </div>


      <div className="business__index-box">
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
      <HomePageContainer pageType={"index"} />
    </div>
    )
  }
}

export default withRouter(BusinessIndexPage);
