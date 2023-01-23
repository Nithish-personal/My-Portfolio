import Image from 'next/image'
import Sample from '../components/sample';

export default function homepageContent(){
    return(
        <>
        <div className="main--container">
            <div className="img--container">
                <Image src={require('../public/static/images/graphic.jpg')}/>
            </div>
            <div className="text--container">
                <h1>Hello!<span className="wave">👋🏾</span></h1>
                <h1 className='sub--container'>Myself Nithish</h1>
                <Sample/>            
            </div>        
        </div>
        <div className='second--container'>
            <div className='header--container'>
                <p className='header1'>LET ME <span className='sub--container'>BRIEF</span> MYSELF</p>
            </div>
            <div className='content--container'>
                <div className='img--container'>
                    <Image src={require('../public/static/images/avatar.svg')}/>
                </div>
                <div className='text--container'>
                    <p className='header5'>Front end developer with 2 years of experience in working with  HTML5, CSS3, JavaScript  and its modern ES6+ syntax and features to deliver exceptional client experience.
Highly proficient with Vue.js framework and including Vuex, Vue Router, and Nuxt.js.Understanding of server-side rendering and functional programming .Proficiency with version control platform like GitHub and detect management tools like JIRA.
                    </p>               
                </div>
            </div>
        </div>
        </>

    )
}