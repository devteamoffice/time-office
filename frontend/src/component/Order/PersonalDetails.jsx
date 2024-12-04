import React from "react";

const PersonalDetails = () => {
  return (
    <div class="row">
      <div class="col-lg-3">
        <h4 class="card-title">Personal Details</h4>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="number" class="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  class="form-control"
                  placeholder="Number"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
