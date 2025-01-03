import React from "react";

const AccountStep2 = () => {
  return (
    <div class="tab-pane" id="basictab2" role="tabpanel">
      <h4 class="fs-16 fw-semibold mb-1">user Information</h4>
      <p class="text-muted">Setup your user information</p>

      <div class="row">
        <div class="col-12">
          <div class="avatar-lg mb-3">
            <div class="avatar-title bg-body rounded-circle border border-3 border-dashed-light position-relative">
              <label for="imageInput" class="position-absolute end-0 bottom-0">
                <div class="avatar-xs cursor-pointer">
                  <span class="avatar-title bg-light text-dark rounded-circle">
                    <i class="bx bx-camera"></i>
                  </span>
                </div>
              </label>
              <input
                class="hidden"
                type="file"
                id="imageInput"
                accept="image/*"
                onchange="previewImage(event)"
              />

              <img
                id="preview"
                src="assets/images/users/dummy-avatar.jpg"
                alt="Preview Image"
                class="rounded-circle img-fluid"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label" for="basicMnumber">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="basicMnumber"
                  class="form-control"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="basicUser" class="form-label">
                  Address
                </label>
                <input
                  id="basicUser"
                  type="text"
                  class="form-control"
                  placeholder="Enter User Name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="basicUser" class="form-label">
                  State
                </label>
                <input
                  id="basicUser"
                  type="text"
                  class="form-control"
                  placeholder="Enter User Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label" for="basicCountry">
                  Country
                </label>
                <select id="basicCountry" class="form-select">
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="China">China</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bharat">Bharat</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="France">France</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Albania">Albania</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStep2;
