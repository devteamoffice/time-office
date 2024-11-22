import React from "react";
import { useDispatch } from "react-redux";
import AccountPaginate from "./AccountPaginate";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProfile,
  updateProfile,
  accountChange,
} from "../../containers/Account/actions";
const AccountSetup = () => {
  const dispatch = useDispatch();

  // Accessing the Redux state
  const account = useSelector((state) => state.account);
  const { user = {}, isLoading } = account;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(accountChange({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(user));
  };
  return (
    <div class="card">
      <div class="card-header">
        <h5 class="card-title anchor" id="basic-wizard">
          Account Setup
          <a class="anchor-link" href="/terms-and-conditions" target="_blank">
            Why we ask for your data?
          </a>
        </h5>
      </div>
      <div class="card-body">
        <div class="mb-5">
          <form>
            <div id="horizontalwizard">
              <div class="tab-content mb-0">
                <div
                  class="tab-pane active show"
                  id="basictab1"
                  role="tabpanel"
                >
                  <h4 class="fs-16 fw-semibold mb-1">Account Information</h4>
                  <p class="text-muted">Setup your account information</p>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicUser" class="form-label">
                          User Name
                        </label>
                        <input
                          id="basicUser"
                          type="text"
                          name="username"
                          class="form-control"
                          placeholder="Enter User Name"
                          value={user.username || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicUser" class="form-label">
                          Name
                        </label>
                        <input
                          id="basicUser"
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Enter User Name"
                          value={user.name || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicEmail" class="form-label">
                          Email
                        </label>
                        <input
                          id="basicEmail"
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Enter your email"
                          value={user.email || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicPassworda" class="form-label">
                          Password
                        </label>
                        <input
                          id="basicPassworda"
                          type="text"
                          class="form-control"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="basictab2" role="tabpanel">
                  <h4 class="fs-16 fw-semibold mb-1">user Information</h4>
                  <p class="text-muted">Setup your user information</p>

                  <div class="row">
                    <div class="col-12">
                      <div class="avatar-lg mb-3">
                        <div class="avatar-title bg-body rounded-circle border border-3 border-dashed-light position-relative">
                          <label
                            for="imageInput"
                            class="position-absolute end-0 bottom-0"
                          >
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
                              <option value="United States">
                                United States
                              </option>
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

                <div class="tab-pane" id="basictab3" role="tabpanel">
                  <h4 class="fs-16 fw-semibold mb-1">Payment Methods</h4>
                  <p class="text-muted">Fill your Payment Methods</p>

                  <div class="row">
                    <div class="col-lg-9">
                      <div class="card border-0">
                        <div class="accordion" id="accordionExample">
                          <div class="card">
                            <div class="card-header p-0" id="pay-pal">
                              <h2 class="mb-0">
                                <button
                                  class="btn btn-light w-100 collapsed rounded-0 border-bottom rounded-top-1"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <div class="d-flex align-items-center justify-content-between">
                                    <span class="fs-5">Paypal</span>
                                    <img
                                      src="assets/images/card/paypal.svg"
                                      alt=""
                                      class="avatar-sm"
                                    />
                                  </div>
                                </button>
                              </h2>
                              <p class="p-3 mb-0">
                                Safe Payment Online Credit card needed. PayPal
                                account is not necessary
                              </p>
                            </div>
                            <div
                              id="collapseTwo"
                              class="collapse"
                              aria-labelledby="pay-pal"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Paypal email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="card mb-0">
                            <div class="card-header p-0">
                              <h2 class="mb-0">
                                <button
                                  class="btn btn-light w-100 collapsed rounded-0 border-bottom rounded-top-1"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <div class="d-flex align-items-center justify-content-between">
                                    <span class="fs-5">Credit card</span>
                                    <div class="icons text-end">
                                      <img
                                        src="assets/images/card/mastercard.svg"
                                        alt=""
                                        class="avatar-sm"
                                      />
                                      <img
                                        src="assets/images/card/stripe.svg"
                                        alt=""
                                        class="avatar-sm"
                                      />
                                      <img
                                        src="assets/images/card/visa.svg"
                                        alt=""
                                        class="avatar-sm"
                                      />
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <p class="p-3 mb-0">
                                Safe Money Transfer using your bank account.
                                Visa , Master Card ,Discover , American Express
                              </p>
                            </div>
                            <div
                              id="collapseOne"
                              class="collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="p-3">
                                <form>
                                  <div class="mb-3">
                                    <label for="card-number" class="form-label">
                                      Card Number
                                    </label>
                                    <input
                                      type="number"
                                      id="card-number"
                                      name="card-number"
                                      class="form-control"
                                      placeholder="0000 0000 0000 0000"
                                      max="16"
                                      maxlength="16"
                                      required
                                    />
                                  </div>
                                </form>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label for="ex-date" class="form-label">
                                        Expiry Date
                                      </label>
                                      <input
                                        type="text"
                                        id="ex-date"
                                        class="form-control flatpickr-input"
                                        placeholder="dd-mm-yyyy"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label for="card-cvv" class="form-label">
                                        CVC/CVV
                                      </label>
                                      <input
                                        type="number"
                                        id="card-cvv"
                                        name="card-cvv"
                                        class="form-control"
                                        placeholder="000"
                                        min="0"
                                        max="3"
                                        maxlength="3"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="alert alert-success mb-0 d-flex align-items-center gap-2"
                                  role="alert"
                                >
                                  <iconify-icon
                                    icon="solar:shield-check-bold"
                                    class="fs-28 align-middle"
                                  ></iconify-icon>
                                  We adhere entirely to the data security
                                  standards of the payment card industry.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="basictab4" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      <div class="text-center">
                        <div class="avatar-md mx-auto mb-3">
                          <div class="avatar-title bg-primary bg-opacity-10 text-primary rounded-circle">
                            <iconify-icon
                              icon="iconamoon:like-duotone"
                              class="fs-36"
                            ></iconify-icon>
                          </div>
                        </div>
                        <h3 class="mt-0">Finished !</h3>

                        <p class="w-75 mb-2 mx-auto">
                          Filled Data Successfully.
                        </p>

                        <div class="mb-3">
                          <div class="form-check d-inline-block">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheck1"
                            />
                            <label class="form-check-label" for="customCheck1">
                              I agree with the Terms and Conditions
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AccountPaginate />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
