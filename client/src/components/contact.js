import _ from 'lodash';
import React, { Component } from 'react';
import '../stylecontact.css';
import github from '../image/github.png';
import linkedin from '../image/linkedin.png';



class Contact extends Component {

    render() {
        return (
            <div id="form-main">
                
                <div id="form-div" >
                    <form action="https://formsubmit.co/jayrajsingh355@gmail.com" method="POST" class="form" id="form1">
                    
                    <p class="name">
                        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                    </p>
                    
                    <p class="email">
                        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                    </p>
                    
                    <p class="text">
                        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
                    </p>
                    
                    
                    <div class="submit">
                        <input type="submit" value="SEND" id="button-blue"/>
                        <div class="ease"></div>
                    </div>
                    </form>

                    <div id='social'>
                        <a href='https://www.linkedin.com/in/jayrajsingh/'><img id='socialicon'src={linkedin}></img></a>
                        <a href='https://github.com/kyoichishido'><img id='socialicon'src={github}></img></a>
                    </div>
                </div>

            </div>
        );
      }
    }

export default (Contact);