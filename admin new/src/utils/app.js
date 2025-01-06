import { ROLES, EMAIL_PROVIDER } from "../../../backend/constants";

export const isProviderAllowed = (provider) =>
  provider === EMAIL_PROVIDER.Facebook;

export const isDisableMerchantAccount = (user) =>
  user.role === ROLES.Merchant &&
  user.merchant &&
  user.merchant.isActive === false;
