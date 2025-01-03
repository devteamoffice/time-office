import React from "react";

const SuccessfullyAccountSetup = () => {
  return (
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

            <p class="w-75 mb-2 mx-auto">Filled Data Successfully.</p>

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
  );
};

export default SuccessfullyAccountSetup;
