import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {useParam} from "react-router-dom";
import Card from '../../Components/Car-Specs/Card';
const Index = () => {
    const params = useParam();
    const [carData, setCarData] = useState();

    useEffect(()=>{
        axios.get(`https://6278a291d00bded55adbbc4c.mockapi.io/specs/${params.id}`)
        .then((res) => {
            setCarData(res.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [params.id])
  return (
      <>
      <Card />
      </>
    )
}

export default Index