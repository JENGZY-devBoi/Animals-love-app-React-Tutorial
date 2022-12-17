import './AnimalShow.css';
import { useState } from 'react';
import { birdSvg, catSvg, cowSvg, dogSvg, gatorSvg, heartSvg, horseSvg } from './svg/index';

const svgMap = {
    bird:   birdSvg,
    cat:    catSvg,
    cow:    cowSvg,
    dog:    dogSvg,
    gator:  gatorSvg,
    horse:  horseSvg
};

const AnimalShow = ({ type }) => {
    const [clicks, setClicks] = useState(0);
    
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[type]} />
            <img 
                className="heart"
                alt="heart" 
                src={heartSvg} 
                style={{ width: `${10 + 10 * clicks}px` }}
            />
        </div>
    );
};

export default AnimalShow;