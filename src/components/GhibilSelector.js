import React from 'react';

const GhibilSelector = ({ ghibilProjects, onGhibilSelected }) => {

    const ghibilOption = ghibilProjects.map((ghibil, id) => (
        <option key={ghibil.id} value={id}>{ghibil.title}</option>
    ));


    function onChange(e) {
        const id = e.target.value;
        const ghibil = ghibilProjects[id];
        onGhibilSelected(ghibil)
    }



    return (

        <select onChange={onChange} >
            {ghibilOption}
        </select>

    )
}

export default GhibilSelector;