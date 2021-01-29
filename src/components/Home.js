import axios from 'axios'
import React from 'react'



export default function Home (props) {
    return(
        <div>
            <div className="homeScreen">
            <h1> 
                WELCOME TO THE MEME HOUSE
            </h1>
            
                <p className="p" >
                    {props.data.status}
                </p>
            </div>

        </div>
    )
}