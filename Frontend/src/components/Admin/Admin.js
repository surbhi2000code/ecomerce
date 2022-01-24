import React from 'react'
import { Link } from "react-router-dom";

function admin() {
    return (
        <div>
           <Link to="/category">Category Page</Link>
           <br/>
           <Link to="/products">Products Page</Link>
        </div>
    )
}

export default admin
