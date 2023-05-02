import{Link} from 'react-router-dom';
import LogoTitle from'../../assets/images/logo-s.png';
import'./Home.scss';
import Logo from './Logo/Logo';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AniLetters';
import Loader from 'react-loaders';

const Home=() =>{
    const[letterClass] = useState('text-animate')
    const nameArray = ["h","y","a","m"]
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
                    <img src={LogoTitle} alt="developer" />
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
            <Logo/>
        </div>
        <Loader type='pacman'/>;
        </>

    );
}

export default Home