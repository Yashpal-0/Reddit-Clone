import React from 'react';
export default function Follower(){
    
    return(
        <div className="container">
<div className="row bootstrap snippets bootdey">
    <div className="col-md-8 col-xs-12">
      <div className="panel" id="followers">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="icon md-check" aria-hidden="true"></i> Followers
          </h3>
        </div>
        <div className="panel-body">
          <ul className="list-group list-group-dividered list-group-full">
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a className="avatar avatar-online" href="javascript:void(0)">
                    
                  </a>
                </div>
                <div className="media-body">
                  <div className="pull-right">
                    <button type="button" className="btn btn-info btn-sm waves-effect waves-light">Follow</button>
                  </div>
                  <div><a className="name" href="javascript:void(0)">Willard Wood</a></div>
                  <small>@heavybutterfly920</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a className="avatar avatar-away" href="javascript:void(0)">
                    <i></i>
                  </a>
                </div>
                <div className="media-body">
                  <div className="pull-right">
                    <button type="button" className="btn btn-success btn-default btn-sm waves-effect waves-light"><i className="icon md-check" aria-hidden="true"></i>Following</button>
                  </div>
                  <div><a className="name" href="javascript:void(0)">Ronnie Ellis</a></div>
                  <small>@kingronnie24</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a className="avatar avatar-busy" href="javascript:void(0)">
                    <i></i>
                  </a>
                </div>
                <div className="media-body">
                  <div className="pull-right">
                    <button type="button" className="btn btn-info btn-sm waves-effect waves-light">Follow</button>
                  </div>
                  <div><a className="name" href="javascript:void(0)">Gwendolyn Wheeler</a></div>
                  <small>@perttygirl66</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a className="avatar avatar-off" href="javascript:void(0)">
                    <i></i>
                  </a>
                </div>
                <div className="media-body">
                  <div className="pull-right">
                    <button type="button" className="btn btn-info btn-sm waves-effect waves-light">Follow</button>
                  </div>
                  <div><a className="name" href="javascript:void(0)">Daniel Russell</a></div>
                  <small>@danieltiger08</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
</div>
    );
}