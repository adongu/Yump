import React from 'react';
import { Link, withRouter } from 'react-router';
import BusinessIndexPageItem from './business_index_page_item';
import { fetchBusinesses } from '../../actions/business_actions';

class BusinessIndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.business
  }

  componentWillMount () {
    this.props.fetchBusinesses();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.businesses.map ((business) => {
              <BusinessIndexPageItem
              key={business.id}
              business={business}
              />
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(BusinessIndexPage);
