import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function Auth({cmp, buyProduct, data, productPrice}) {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('email')){
            navigate('/')
        }


    }, [])

    return (
        <>
            <Cmp />
        </>
    )
}

export default Auth