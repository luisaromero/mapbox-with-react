
import React, {Component} from 'react';
import MapGL, {NavigationControl , Marker,Popup} from 'react-map-gl';
// import * as store from './store_directory.json'
// const store = require('./store_directory.json');


const TOKEN='pk.eyJ1IjoibHVpc2Fyb21lcm8iLCJhIjoiY2p6aGV5MXVpMHJ1ZTNucGhwcng3Y3N0OSJ9.BYd9a8Gh3nCUjwcpQF8scA'; 

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
          latitude: 19.432608,  
          longitude: -99.133209,
          zoom: 10,
          bearing: 0,
          pitch: 0,
          width: '100%',
          height: 500,
        }
      };
    }
      render() {
          const {viewport} = this.state;
      return (
            <MapGL
            
              {...viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
              mapStyle="mapbox://styles/luisaromero/cjzhof347397k1cs2nee373nj"
              mapboxApiAccessToken={TOKEN}>
              <div className="nav" >
             
                <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
    
       </div>
    
      </MapGL>
    );
  }
}

       export default App