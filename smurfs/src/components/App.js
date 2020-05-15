import React, { useState, useEffect } from "react";
import { FormContext } from '../contexts/FormContext'
import axios from 'axios'
import "./App.css";

import Form from '../components/Form'


const url = 'http://localhost:3333/smurfs'



function App() {


  const [smurfData, setSmurfData] = useState([])



  const getSmurf = () => {

    axios.get(url)
      .then(res => {

        console.log(res.data)

        setSmurfData(res.data)

      })
      .catch(err => {
        console.log("error!")
      })
  }

  useEffect(() => {
    getSmurf()
  }, [])


  const postSmurf = smurf => {

    axios.post(url, smurf)
      .then(res => {
        console.log(res)
        setSmurfData([...smurfData, res.data])


      })
      .catch(err => {
        console.log(err)

      })

  }



  return (
    <div className="App">

      <FormContext.Provider value={{ postSmurf, getSmurf }}>
        <h1>Smurfs Creator</h1>



        <Form />

        {
          smurfData.map(smurf => {
            return (
              <div>
                <h3>Name: {smurf.name}</h3>
                <h3>Age: {smurf.age}</h3>
                <h3>Height: {smurf.height}</h3>
              </div>
            )
          })
        }
      </FormContext.Provider>
    </div>
  );
}


export default App;
