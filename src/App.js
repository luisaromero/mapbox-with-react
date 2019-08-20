
import React, {Component , useState} from 'react';
import MapGL, {NavigationControl , Marker,Popup} from 'react-map-gl';
import  store from './store_directory.json'



const TOKEN='pk.eyJ1IjoibHVpc2Fyb21lcm8iLCJhIjoiY2p6aGV5MXVpMHJ1ZTNucGhwcng3Y3N0OSJ9.BYd9a8Gh3nCUjwcpQF8scA'; 

class App extends Component {
  constructor() {
      super();
      this.state = {
        viewport: {
          latitude: 19.432608,  
          longitude: -99.133209,
          zoom: 10,
          bearing: 0,
          pitch: 0,
          width: '100%',
          height: 500,
         favorite: []
        } 
      } ;
    } 
    addFavorite(store) {
          alert('agregado a favoritos')
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
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/> </div>
          {store.map(park => ( <Marker latitude={park.Coordinates.lat} longitude={park.Coordinates.lng}>
            <button className="btn" onClick={
             this.addFavorite.bind(this)}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvf5xv5YL5JUmVR4j9b3HCuBJ7URH5pKTsJx_pkrk9zcsWn9s"></img>
              </button>
          </Marker>

          ))} 
      </MapGL>
    );
  }
}

       export default App



         {/*  */}