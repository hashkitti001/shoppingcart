import React, {Component} from "react";
class ErrorPage extends Component {
   render(){
    return (
        <div>
           <h1 className="text-7xl text-red-700 font-extrabold text-center">Error</h1>
            <h1 className="text-9xl text-red-700 font-extrabold text-center">404</h1>
             <p className="text-center font-light">Sorry that page wasn't found on our servers</p>
        </div>
    )
   }
}
export default ErrorPage;