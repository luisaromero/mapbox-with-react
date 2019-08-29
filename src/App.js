
import React, {Component , useState} from 'react';
import MapGL, {NavigationControl , Marker,Popup} from 'react-map-gl';
import  store from './store_directory.json'



const TOKEN='pk.eyJ1IjoibHVpc2Fyb21lcm8iLCJhIjoiY2p6aGV5MXVpMHJ1ZTNucGhwcng3Y3N0OSJ9.BYd9a8Gh3nCUjwcpQF8scA'; 

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        favorite: [],
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
    
      this.index = 0;
      this.addFavorite =  this.addFavorite.bind(this);
      
    } 
    addFavorite(a) {
      
      let newList = [...this.state.favorite] 
      for( let i = 0; i < newList.length; i++){ 
        if ( newList[i].name === a) {
            newList[i].count++;
          return this.setState({favorite:newList})
         
        }
      }
this.setState({favorite: this.state.favorite.concat([{name : a,  id:this.index, count:1 }])});
this.index ++;
console.log(newList)
}
      
      render() {
        console.log(store)
          const {viewport} = this.state;
      return (
            <MapGL
           
              {...viewport}
             
              onViewportChange={(viewport) => this.setState({viewport})}
              mapStyle="mapbox://styles/luisaromero/cjzhof347397k1cs2nee373nj"
              mapboxApiAccessToken={TOKEN}>
               <div className="nav" >
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/> </div>
          {store.map(ele => ( <Marker latitude={ele.Coordinates.lat} longitude={ele.Coordinates.lng}>
            <button className= "btn" name ={ele.Name}  onClick={(e) =>
             this.addFavorite(e  ,this , this.name)}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvf5xv5YL5JUmVR4j9b3HCuBJ7URH5pKTsJx_pkrk9zcsWn9s"></img>
              </button>
          </Marker>

          ))} 
      </MapGL>
    );
  }
}

       export default App