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
import SuccessfullyAccountSetup from "./SuccessfullyAccountSetup";
import PaymentMethods from "./PaymentMethods";
import AccountStep2 from "./AccountStep2";
import AccountStep1 from "./AccountStep1";
const AccountSetup = () => {
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
                <AccountStep1 />
                <AccountStep2 />

                <PaymentMethods />

                <SuccessfullyAccountSetup />

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
