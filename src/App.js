import './App.css';
import React , {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';



function App() {
  const [text, TextFunc] = useState(<Login/>);
  const login=()  => {
    TextFunc(<Login/>);
  }
  const sign = () => {
    TextFunc(<Signup/>);
  }
  
  return (
    <section className="vh-1000 gradient-custom">    
  
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                {text}

                <div>
              <p className="mb-0">Don't have an account? <button className="btn btn-outline-light btn-lg px-1" onClick={sign}>Sign up</button>
              </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}

export default App;

