import React from 'react';

class BusinessMap extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const options = {
      center: { lat: 40.7128, lng: -74.0059 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.listenForMove();

  }
  render() {
    return(
      <span>
        <div ref={ map => this.mapNode = map }>
        </div>
      </span>
    )
  }
}

export default BusinessMap;
