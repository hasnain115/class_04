import React from 'react';
import './App.css';
import Weather from './weather_today.js';

function App() {
  return (
    <div className="App">
          {/* {<Weather_today></Weather_today>} */}
           <h1>Karachi Weather Today at 3 PM</h1>
           <Weather Temperature= "36"  Humidity = "47" />
         
           <h1>Karachi Weather Today at 4 PM</h1>
          <Weather Temperature  ="35"  Humidity = "50" />
          
           <h1>Karachi Weather Today at 5 PM</h1>
           <Weather Temperature ="34"  Humidity = "53" />

           <h1>Karachi Weather Today at 6 PM</h1>
           <Weather Temperature ="33"  Humidity = "55" />

           <h1>Karachi Weather Today at 7 PM</h1>
           <Weather Temperature ="32"  Humidity = "60" />

           <h1>Karachi Weather Today at 8 PM</h1>
           <Weather Temperature ="31"  Humidity = "64" />

           <h1>Karachi Weather Today at 9 PM</h1>
           <Weather Temperature ="30"  Humidity = "65" />

           <h1>Karachi Weather Today at 10 PM</h1>
           <Weather Temperature ="30"  Humidity = "68" />

           <h1>Karachi Weather Today at 11 PM</h1>
           <Weather Temperature ="29"  Humidity = "70" />
           
           
    </div>
  );
}

export default App;
