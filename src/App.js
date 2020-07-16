
import React, {useState , useEffect} from 'react';
import MapGL, {NavigationControl , Marker,Popup} from 'react-map-gl';
import  store from './store_directory.json'




const TOKEN='pk.eyJ1IjoibHVpc2Fyb21lcm8iLCJhIjoiY2p6aGV5MXVpMHJ1ZTNucGhwcng3Y3N0OSJ9.BYd9a8Gh3nCUjwcpQF8scA'; 

export default function App() {
 const [viewport,setviewport]= useState({
          latitude: 19.432608,  
          longitude: -99.133209,
          zoom: 11,
          bearing: 0,
          pitch: 0,
          width: '100%',
          height: '100%'       
 });

 const [selectedStore,setSelectedStore] = useState(null);
 console.log(selectedStore)
 useEffect(() => {
  const listener  = e =>{
    if (e.key === "Escape"){
      setSelectedStore(null);
    }
  };
  window.addEventListener("keydown", listener);
 }, []) ;
      
      return (
        <React.Fragment>
          <div className="ContainerMap">
          <div className="Map">
          {/* <div className="logo"><h1>CDMXSTORES <i className="fas fa-shopping-cart"></i></h1></div> */}
            <MapGL
              {...viewport}
              onViewportChange={(viewport) => {setviewport(viewport)}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxApiAccessToken={TOKEN}  >
          {store.map(ele => ( <Marker key={ele.Address} latitude={ele.Coordinates.lat} longitude={ele.Coordinates.lng } >
            <button className= "btn" name ={ele.Name} onClick={(e) => {
             e.preventDefault();
              setSelectedStore(ele)}}>
                <i className="fas fa-map-marker-alt"></i>
              </button>
          </Marker>
          ))}
          {selectedStore ? 
          (<Popup latitude={selectedStore.Coordinates.lat} longitude={selectedStore.Coordinates.lng}
          onClose={() =>{
          setSelectedStore(null)}}>
          <div className="popup">
          <h1>{selectedStore.Name}</h1>
           <p>{selectedStore.Address}</p> 
           
           <button><p>Agregar a favoritos <i className="fas fa-star"></i></p></button>
            </div>
          </Popup>):null} 
      </MapGL>
      </div>
     <div className="Favorites">
       <h1>Agrega tus tiendas a favoritos</h1>
     <p>Pincha en el corazón en la tienda que deseas seleccionar y se agregará a lista </p>
     </div>
     </div>
      </React.Fragment>
      );
          }
  