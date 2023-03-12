import React from 'react';
export default function Signup() {
    return (
        <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">First Name</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="email" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Last Name</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">UserName</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="email" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Age</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="number" maxlength="10" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Contact No.</label>
              </div>


              <div className="form-outline form-white mb-4">
                <input type="email" id="text" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Email Address</label>
              </div>


              

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">SignUp</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>
    )
}