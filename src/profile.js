import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Follower from './follower.js';
import Following from './following.js';


export default function ProfilePage() {
  const [follower, TextFunc] = useState("");
  const fer=()  => {
    TextFunc(<Follower/>);
  }
  const fing = () => {
    TextFunc(<Following/>);
  }
  return (
    <Link to="/profile">
    <section hello="background-color: #eee;">
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" hello="width: 150px;"/>
            <h5 className="my-3">John Smith</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary" onClick={fer}>Follower</button>
              <button type="button" className="btn btn-outline-primary ms-1" onClick={fing}>Following</button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Johnatan Smith</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">example@example.com</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>

            </div>
            <hr/>
            <div className="row">

<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Edit Profile
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Name</label>
</div>
<div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Email</label>
</div>
<div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Phone no.</label>
</div>
<div class="form-outline">
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Address</label>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div>
{follower}
</div>
          </div>
          </div>
        </div>
       </div> 
    </div>
    
  </div>
</section>
</Link>
  );
}