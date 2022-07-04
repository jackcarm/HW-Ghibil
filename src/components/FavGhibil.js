import React from 'react';

const FavGhibil = ({ ghibilProjects, onGhibilSelected }) => {


    const favGhibil = ghibilProjects.filter(ghibil => ghibil.isFavourite)



    return (
        <>
            <h3>Watch List</h3>
            <ul>
                {favGhibil.map(ghibil => {
                    return (
                        <li key={ghibil.id}>
                            <button onClick={() => onGhibilSelected(ghibil)}>{ghibil.title}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FavGhibil;