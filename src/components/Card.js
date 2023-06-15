import React from 'react';

const Card = ({ name, image, language }) => {
    return (
        <div className="px-7 card w-96 bg-base-100 shadow-xl mr-10 mb-20">
            <figure>
                <img className="mt-8" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{language}</p>
            </div>
        </div>
    );
};

export default Card;
