
import React, {useState} from 'react';
import MapGL, {NavigationControl , Marker,Popup} from 'react-map-gl';
import  store from './store_directory.json'




const TOKEN='pk.eyJ1IjoibHVpc2Fyb21lcm8iLCJhIjoiY2p6aGV5MXVpMHJ1ZTNucGhwcng3Y3N0OSJ9.BYd9a8Gh3nCUjwcpQF8scA'; 

export default function App() {
 const [viewport,setviewport]= useState({
          latitude: 19.432608,  
          longitude: -99.133209,
          zoom: 10,
          bearing: 0,
          pitch: 0,
          width: '100%',
          height: 500        
 });
      
      return (
        <React.Fragment>
          <div className="logo"><h1>CDMXSTORES</h1></div>
            <MapGL
              {...viewport}
              onViewportChange={(viewport) => {setviewport(viewport)}}
              mapStyle="mapbox://styles/luisaromero/cjzhof347397k1cs2nee373nj"
              mapboxApiAccessToken={TOKEN}  >
       
          {store.map(ele => ( <Marker latitude={ele.Coordinates.lat} longitude={ele.Coordinates.lng } >
            <button className= "btn" name ={ele.Name} onClick={(e) =>
             e.preventDefault()}>
               <img src="https://images.vexels.com/media/users/3/154655/isolated/preview/71dccbb077597dea55dfc5b7a7af52c4-ubicaci--n-pin-icono-de-contacto-by-vexels.png" alt="icono"></img>
              </button>
          </Marker>
          ))} 

          {/* {selectedStore ? (<Popup latitude={selectedStore.Coordinates.lat} longitude={selectedStore.Coordinates.lng}>
      <div>hello</div>
          </Popup>):null} */}
           <div className="nav">
          <NavigationControl  onViewportChange={(viewport) => this.setState({viewport})}/> </div>
      </MapGL>
     
      </React.Fragment>
      

      );
          }
  