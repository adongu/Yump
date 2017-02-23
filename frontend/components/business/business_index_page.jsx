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

      <div className="business__index-box-container">
        <div className="business__index-box">
          {
            this.props.businesses.map( business => {
              return (
                <div key={business.id} className="business__index-individual">
                  <BusinessIndexPageItem

                    business={business}
                    />
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

export default BusinessIndexPage;
