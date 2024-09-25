import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import img from "../../assets/images/small/img-10.jpg";
const Login = () => {
  return (
    <div class="d-flex flex-column h-100 p-3">
      <div class="d-flex flex-column flex-grow-1">
        <div class="row h-100">
          <LoginForm />
          <div class="col-xxl-5 d-none d-xxl-flex">
            <div class="card h-100 mb-0 overflow-hidden">
              <div class="d-flex flex-column h-100">
                <img src={img} alt="image" class="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
