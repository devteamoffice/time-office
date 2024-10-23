module.exports = {
  app: {
    name: "TimeOffice Backend",
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL || "http://localhost:3000",
  },
  port: process.env.PORT || 4000,
  jwt: {
    secret: process.env.JWT_SECRET || "vhvvhjvj34fefwefwefwfwf", // Provide a fallback secret
    tokenLife: "7d",
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY,
    listKey: process.env.MAILCHIMP_LIST_KEY,
  },
  mailgun: {
    key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    sender: process.env.MAILGUN_EMAIL_SENDER,
  },
};
