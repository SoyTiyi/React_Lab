import React from 'react'


const Login = props => {
    return (
        <div class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="holamundo"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>

                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;