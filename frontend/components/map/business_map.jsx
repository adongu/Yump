import React from 'react';

class BusinessMap extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const options = {
      center: { lat: 37.7758, lng: -122.435 },
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
