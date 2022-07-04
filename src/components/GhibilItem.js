import react from 'react';

const GhibilItem = ({ ghibil, onFavToggle }) => {


    const handleClick = () => {
        onFavToggle(ghibil.id)
    }

    const favouriteBtnText = ghibil.isFavourite ? 'Remove from watch list' : 'Add to watch list'

    return (
        <>
            <h3>{ghibil.title}</h3>
            <h5>{ghibil.original_title}</h5>
            <img src={ghibil.image} ></img>
            <p>{ghibil.description}</p>
            <p>Director: {ghibil.director}</p>
            <p>RT Score: {ghibil.rt_score}</p>
            <button onClick={handleClick}>{favouriteBtnText}</button>
        </>
    )
}

export default GhibilItem;