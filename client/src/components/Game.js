import React from 'react';

const Game = ({ name, rating, released, 
    playtime, background_image }) => (
    <div>
        <img src={background_image} alt={name} />
    </div>
    );
    
    export default Game; 