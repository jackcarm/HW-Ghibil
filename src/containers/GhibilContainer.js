import React, { useState, useEffect } from 'react';
import GhibilSelector from '../components/GhibilSelector';
import GhibilItem from '../components/GhibilItem';
import FavGhibil from '../components/FavGhibil';


const GhibilContainer = () => {


    const [ghibilProjects, setGhibilProjects] = useState([]);
    const [selectedGhibilId, setSelectedGhibilId] = useState('');

    useEffect(() => {
        getGhibilProjects()
    }, []);

    const getGhibilProjects = () => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(ghibilData => setGhibilProjects(ghibilData))
    }

    const handleGhibilSelected = id => {
        setSelectedGhibilId(id)
    }


    const handleFavToggle = (id) => {
        const updatedGhibilProjects = ghibilProjects.map((ghibil) => {
            return ghibil.id === id
                ? { ...ghibil, isFavourite: !ghibil.isFavourite }
                : ghibil
        })
        setGhibilProjects(updatedGhibilProjects)
    }


    // const selectedGhibil = ghibilProjects.find(ghibil => ghibil.id === selectedGhibilId)




    return (
        <div>
            <h1>Ghibil Projects</h1>
            <FavGhibil ghibilProjects={ghibilProjects} onGhibilSelected={handleGhibilSelected} />
            <GhibilSelector ghibilProjects={ghibilProjects} onGhibilSelected={handleGhibilSelected} />
            <GhibilItem ghibil={selectedGhibilId} onFavToggle={handleFavToggle} />
        </div>
    )
}







export default GhibilContainer;