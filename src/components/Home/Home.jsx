import{Link} from 'react-router-dom';
import'./Home.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AniLetters';
import Loader from 'react-loaders';

const Home=() =>{
    const[letterClass] = useState('text-animate')
    const nameArray = ["","S","h","y","a","m"]
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>Y</span>
                    <span className={`${letterClass}_12`}>o...!</span>
                    <br/> 
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h1>
                <h2>Frontend developer/Freelancer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
        </div>
        <Loader type='pacman'/>;
        </>

    );
}

export default Home