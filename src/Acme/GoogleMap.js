import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => (
  <div className="google-map">
    {GoogleMap}<h1> This will be a map someday...I swear</h1>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{key:"AIzaSyAhn7WY2XMQ6HLbYLwAteCUKwyfw7ntpzE"}}
      >
        <GoogleMap
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;





//
//
// const GoogleMap = ({ text }) => (
//   <div className="google-map">
//     {text}
//   </div>
// );
//
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {lat: 59.95, lng: 30.33},
//     zoom: 11
//   };
//
//   render() {
//     return (
//       <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         bootstrapURLKeys={{key:"AIzaSyAhn7WY2XMQ6HLbYLwAteCUKwyfw7ntpzE"}}
//       >
//         <GoogleMap
//           lat={59.955413}
//           lng={30.337844}
//           text={'Kreyser Avrora'}
//         />
//       </GoogleMapReact>
//     );
//   }
// }
