import Loader from 'react-loaders'
import  './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AniLetters'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'




const Contact = () => {

   
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form >
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>

                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='Email' required/>

                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required/>

                        </li>
                        <li>
                            <textarea type='text' name='message' placeholder='Message' required></textarea>

                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                        </li>
                    </ul>
                </form>

            </div>

            </div>
            <div className='info-map'>
                Shyam,
                <br/>
                India,
                <br/>
                Chennai,<br/>
                <span>kishoresworks8@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[13.004055171336287, 80.20157224345402]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                    <Marker position={[13.004055171336287, 80.20157224345402]}>
                        <Popup> I live here</Popup>

                    </Marker>

                </MapContainer>

            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Contact