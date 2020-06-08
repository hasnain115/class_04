import React from 'react';

function Weather_today(props)
{
    return( 
        <div>
            {/* <h1>
                Karachi Weather_today 
            </h1> */}
            
    <h1>
        Temperature °C={props.Temperature}
    </h1>

    
    <h2>
         Humidity %={props.Humidity}
    </h2>
<br/>
<br/>
        
    </div>
        
    )
}

export default Weather_today;
