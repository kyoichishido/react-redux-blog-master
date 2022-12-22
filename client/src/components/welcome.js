import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../image/b1_1.png'
import img2 from '../image/b2.png'
import img3 from '../image/b3.png'
import img4 from '../image/b4.png'


export default () => (
  <div>
    
    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div  className="jumbotron">
      <img id='img1' src={img1} />
        <div id='welcometext' >
          <h1 id='heading1' className="text-left display-3">Welcome!</h1>
          <p className='text-left'>Share Tech is a Blogging platform and here you can share your knowledge about any kind of tech with the World.</p>
          <p><Link id='explorebtn' className="btn  btn-lg" to="/posts" role="button">Explore &raquo;</Link></p>
        </div>
    </div>

    <div className='belowcontainer'>
      <div className='img2' ><img id='img2' src={img2} /></div>
      <div id='belowcontext' >
        <h1 id='heading2' className="text-left display-3">Tech Writer</h1>
        <p id='p2' className='text-left '>Are you a Software Engineer or someone who's passionate about Computer Science? And you also like writing? This platform is for you, you can share you're experiences and knowledge about Tech and Comp sci overall.</p>
        <p id='p2' className='text-left '>You can write about Tech interview prepartion, Data structures or anything you believe is related to Computer Science and will help somebody.</p>
      </div>
    </div>

    <div className='belowcontainer'>
      <div className='img2' ><img id='img2' src={img4} /></div>
      <div id='belowcontext' >
        <h1 id='heading2' className="text-left display-3"> Designer</h1>
        <p id='p2' className='text-left '>I believe, UI and UX designers are also a major part of Software Engineering field and if you're a designer please feel free to write here.</p>
        <p id='p2' className='text-left '>You can share your designing experiences and guide a beginner. You can also teach fundamentals of UI?UX design through your writing. Make it a place for students to learn and grow their skills.</p>
      </div>
    </div>

    <div className='belowcontainer'>
      <div className='img2' ><img id='img2' src={img3} /></div>
      <div id='belowcontext' >
        <h1 id='heading2' className="text-left display-3">Students</h1>
        <p id='p2' className='text-left '>If you're a Student or just like reading about Tech, this Blog is a treasure for you. Find all about SWE, AI, AR and other Comp sci related stuffs.</p>
        <p id='p2' className='text-left '>You can read about tons of Tech related topics here. And also, you can use this platform to research for your Homework or your Research project.</p>
      </div>
    </div>

    { /*Example row of columns
    <div className="row text-justify">
      <div className="col-md-4">
        <h2>Front-end</h2>
        <p>The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.</p>
      </div>
      <div className="col-md-4">
        <h2>Back-end</h2>
        <p>The back-end server is built with Express.js and Node.js in MVC pattern, which provides completed REST APIs for data interaction. Passport.js is used as an authentication middleware in the sever. JSON Web Token (JWT) is used for signing in user and making authenticated requests.</p>
      </div>
      <div className="col-md-4">
        <h2>Database</h2>
        <p>MongoDB is used as the back-end database, which include different data models/schemas (i.e., User, Post and Comment). Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).</p>
      </div>
    </div>
    */}
  </div>

);