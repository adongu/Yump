import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

  const _getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
  });

  let _mapOptions = {
    center: {lat: 40.752225, lng: -73.986490}, // New York City
    zoom: 11
  };


class BusinessMap extends React.Component{

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.results.length > 0) {
      this.MarkerManager.updateMarkers(this.props.results);
    };
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.results);
  }

  _handleMarkerClick(business) {
    this.props.router.push(`businesses/${business.id}`);
  }

  render() {
    return(
      <span className="business__search-map-container">
        <div className='business__search-map' ref='map'>
          Map
        </div>
      </span>
    )
  }
}

export default withRouter(BusinessMap);
