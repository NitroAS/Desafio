import React from "react";
import '../../Assets/CSS/footer.css';
import logoTwo from "../../Assets/img/Group 1.png"



export  const Footer = ():JSX.Element =>{


    return(
        <div className="footer">
           
           <div className="logoTwo">
                <img src={logoTwo} alt="Logo do header" />
            </div>

          
            <div className='borda'></div>
           

            <p className='rodape'>Company Inc, 8901 Marmora Road, Glasgow, D04 89GR
            <br></br>
            <br></br>
            Call us now toll free: (800)2345-6789
            <br></br>
            <br></br>
            Customer support:support@demolink.org
            <br></br>
            <br></br>
            Skype: sample-username
            </p> 
           

        </div>
    );



}
