import React from 'react'
import {Link} from 'react-router-dom';


   



export default function Trailer() {
    return (
        <div>
            <ul>
<li style={{marginLeft:10,listStyle:'none',color:'black'}}>

            <Link to="">
        Go to Home Page
        </Link>
</li>
<li style={{marginLeft:10,listStyle:'none',color:'black'}}></li>
            <Link to="/Ta">
        Show description and Trailer of Superman
        </Link>
        <li style={{marginLeft:10,listStyle:'none',color:'black'}}>
        <Link to="/Tb">
        Mad Max: Fury Road
        </Link>
        </li>
        <li style={{marginLeft:10,listStyle:'none',color:'black'}}>

        <Link to="/Tc">
        Show description and Trailer of Jumanji
        </Link>
        </li>
        <li style={{marginLeft:10,listStyle:'none',color:'black'}}>
        <Link to="/Td">
        Show description and Trailer of Fast and Furious
        </Link>
            </li>
            </ul>
        </div>
    )
}
