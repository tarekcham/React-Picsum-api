import React  from "react";
import './Layout.css';
import '../styles/App.css';



const Layout = (props) => {


   if(props.img) {

     return (
       <div>
          <ul className="test">
             <li> {props.author}</li>
             <li> {props.post_url} </li>
            <li> {props.author_url}</li>
          </ul>
           <img height="600" alt="Picsum API" src={props.img}/>
       </div>
           )
    }
   else {
      return null
   }
}

export default Layout;
