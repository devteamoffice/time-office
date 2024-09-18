module.exports = {
  app: {
    name: "Mern Ecommerce",
    apiURL: process.env.BASE_API_URL, // Ensure default values are provided
    clientURL: process.env.CLIENT_URL,
  },
  port: process.env.PORT || 4000,
  database: {
    url: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
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
