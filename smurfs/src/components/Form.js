import React, { useContext, useState } from 'react';

import { FormContext } from '../contexts/FormContext'

// const initialFormValues = {

//     name: '',
//     age: '',
//     height: '',


// }

function Form() {

    const { postSmurf, getSmurf } = useContext(FormContext);


    const addSmurf = e => {
        e.preventDefault();
        postSmurf(newSmurf);
        getSmurf()
    };


    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })


    const changeHandler = e => {

        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    }





    return (
        <div>
            <form autoComplete="off" >


                <label autoComplete="off">Name:&nbsp;
          <input

                        value={newSmurf.name}
                        onChange={changeHandler}
                        name='name'
                        type='text'
                    /></label>
                <label>Age:&nbsp;
          <input

                        value={newSmurf.age}
                        onChange={changeHandler}
                        name='age'
                        type='text'
                    /></label>


                <label>Height: &nbsp;
          <input
                        value={newSmurf.height}
                        onChange={changeHandler}
                        name='height'
                        type="text"


                    /></label>

            </form>

            <button onClick={addSmurf}>Add Smurf</button>
        </div>

    )
}

export default Form;