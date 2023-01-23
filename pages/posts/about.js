import Image from 'next/image';

export default function FirstPost() {
    return (
       <div className="about-container">
        <h1 className="header-left" ><span className="text--pink">Work</span> experience</h1>
         <div className="content--container">
         <div className="text--container">
            <h3><span className="text--pink">Client :</span> Sotheby's International Realty</h3>
            <h3>26 May 2021 - <span className="text--pink">Present</span></h3>
         </div>
         <div className="img--container">
            <Image src={require('../../public/static/images/sir_logo.jpg')}/>
         </div>
         </div>
         <h2 className="header-left" ><span className="text--pink">Product</span> description :</h2>
         <p className="para-justify">This application is provided as Product As A Service to our client SIR, which provides a great UX service 
            for branding all the Land properties they and their affiliate company holds. The data is 
            provided from an Admin tool and from MLS Listings. We process it in backend using an
            Elastic Search methodology to be stored and retrieve in a format we developers need. 
            Static pages and magazines are also provide for the clients in an hybrid way using the organization’s very own Admin Tool.</p>
         
         <h3 className="header-left"><span className="text--pink">Roles</span> and Responsibilities :</h3>
         <div>            
            <h3>Role: <span className="text--pink">Software Developer</span></h3>
            <h3>Technical Stack: <span className="text--pink">JavaScript, VueJs, NuxtJs, HTML, CSS3, Sass, GraphQl</span></h3>
         </div>
         <ul>
            <li><span className="text--pink">- </span>Responsible for Developing user-facing applications using Vue.js with up-to-date developments and security updates in the JavaScript and Vue.js space.</li>
            <li><span className="text--pink">- </span>Worked  on Building modular and reusable components and Optimizing  application for performance.</li>
            <li><span className="text--pink">- </span>Refractored redundant code and maintained code readability.</li>
            <li><span className="text--pink">- </span>Intergrated GraphQL schemas, queries and retrieved data using an asynchronous request handling.</li>
            <li><span className="text--pink">- </span>Worked on Kibana and Loggly logs to check the client side request.</li>
            <li><span className="text--pink">- </span>Experience with consuming RESTful APIs and testing APIs in Postman API.</li>
            <li><span className="text--pink">- </span>Responsible for improvement and bugs handling tasks.</li>
            <li><span className="text--pink">- </span>Developed and enhanced multiple widgets and designed animations for  On Scroll page effects .</li>
            <li><span className="text--pink">- </span>Enhanced a Static page and compiled them into a magazine.</li>
            <li><span className="text--pink">- </span>Used GIT Code versioning tools.</li>
            <li><span className="text--pink">- </span>Used Photo pea online Photo enhancement tool for editing pictures.</li>
            <li><span className="text--pink">- </span>Worked on Agile methodologies.</li>
            <li><span className="text--pink">- </span>UsedJIRA for detect management.</li>
         </ul>
          
       </div>	  
    )
 }