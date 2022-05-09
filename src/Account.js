import React, { useState, useEffect } from 'react'
import avatar from './img/avatar_user.png'



function Account() {
    const [displayAccount, setDisplayAccount] = useState(true);
    const [displayPassword, setDisplayPassword] = useState(false);
    const handleToggle = () =>{
        setDisplayAccount(false);
        setDisplayPassword(true)

    };













  return (
      <div>
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="./style.css"></link>

          <body>
              <section class="py-5 my-5">
                  <div class="container">

                      <div class="bg-white shadow rounded-lg d-block d-sm-flex">

                          <div class="profile-tab-nav border-right">
                              <div class="p-4">
                                  <div class="img-circle text-center mb-3">
                                      <img src={avatar} alt="Image" class="shadow"></img>
                                  </div>
                                  <h4 class="text-center">Kiran Acharya</h4>
                              </div>
                              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                  <a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
                                      <i class="fa fa-home text-center mr-1"></i>
                                      Account
                                  </a>
                                  <a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false" onClick={handleToggle}>
                                      <i class="fa fa-key text-center mr-1"></i>
                                      Password
                                  </a>
                                  <a class="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
                                      <i class="fa fa-user text-center mr-1"></i>
                                      Security
                                  </a>
                                  <a class="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
                                      <i class="fa fa-tv text-center mr-1"></i>
                                      Application
                                  </a>
                                  <a class="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
                                      <i class="fa fa-lock text-center mr-1"></i>
                                    Administration
                                  </a>
                              </div>
                          </div>


                          <div class="tab-content p-4 p-md-5" id="v-pills-tabContent" style={{ display: displayAccount ? "block" : "none" }}>
                              <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                                  <h3 class="mb-4">Account Settings</h3>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>First Name</label>
                                              <input type="text" class="form-control" placeholder="Kiran"></input>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>Last Name</label>
                                              <input type="text" class="form-control" placeholder="Acharya"></input>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>Email</label>
                                              <input type="text" class="form-control" placeholder="kiranacharya287@gmail.com"></input>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>Phone number</label>
                                              <input type="text" class="form-control" placeholder="+91 9876543215"></input>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>Company</label>
                                              <input type="text" class="form-control" placeholder="Kiran Workspace"></input>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label>Designation</label>
                                              <input type="text" class="form-control" placeholder="UI Developer"></input>
                                          </div>
                                      </div>

                                  </div>
                                  <div>
                                      <button class="btn btn-primary">Update</button>
                                      <button class="btn btn-light">Cancel</button>
                                  </div>
                              </div>


                              

                          </div>
                      </div>
                  </div>
              </section>


              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          </body>



      </div>
  )
}

export default Account