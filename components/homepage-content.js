import Image from 'next/image'
import Sample from '../components/sample';

export default function homepageContent(){
    return(
        <div className="main--container">
            <div className="img--container">
                <Image src={require('../public/static/images/graphic.jpg')}/>
            </div>
            <div className="text--container">
                <h1>Hello!<span class="wave">👋🏾</span></h1>
                <h1 className='sub--container'>Myself Nithish</h1>
                <Sample/>            
            </div>        
        </div>

    )
}