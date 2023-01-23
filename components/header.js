import Link from "next/link";
import Image from 'next/image';

export default function headerComponent() {
    return(
        <div className="header-container">
            <div className="logo--container">
                <div>
                    <Link href="/"><Image src={require('../../My-portfolio/public/static/images/N_Logo.png')}/></Link>
                </div>               
            </div>
            <div className="btn--container"> 
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/posts/about">About</Link></li>
                    <li><Link href="/TechSkills/techskills">Tech-Stack</Link></li>
                </ul>            
            </div>
            
        </div>
    )
};
