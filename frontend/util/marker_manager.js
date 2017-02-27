/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFrombusiness = this._createMarkerFrombusiness.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(businesses){
    this.businesses = businesses;
    this._businessesToAdd().forEach(this._createMarkerFrombusiness);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _businessesToAdd() {
    const currentbusinesses = this.markers.map( marker => marker.businessId );
    return this.businesses.filter( business => !currentbusinesses.includes(business.id) );
  }

  _markersToRemove(){
    const businessIds = this.businesses.map( business => business.id );
    return this.markers.filter( marker => !businessIds.includes(marker.businessId) );
  }

  _createMarkerFrombusiness(business) {
    const pos = new google.maps.LatLng(business.latitude, business.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      businessId: business.id
    });
    marker.addListener('click', () => this.handleClick(business));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
