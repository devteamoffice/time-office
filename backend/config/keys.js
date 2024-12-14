module.exports = {
  app: {
    name: "TimeOffice Backend",
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL || "http://localhost:3000",
  },
  port: process.env.PORT || 4000,
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      "f5e2ff053fef46f481b63ddf3993280745946ac20aaef987da859b2df5407b95b3703b2c63dd8f78dc51a69b15c2ee49ac8308a0fda3fa5a423f6192db0131ea02591d7e5b952a17d28217d9ae9a9f04c6f14f67387930db7290e4eb069c66e4f3d80969277fa13371c318a25877b6d91a1f8b72d7b869d842c48155de9f0bb654047437559adec89f25cb73e1c58a01e0d81edbf09e8fd2e8b3826de2d5d63acd37749f36fcce6332d954b18e69984e6b6d3a5df63840c08f891668f648df6ef6aa30be9b4c549282e274ec1f3bc650274b0cffa47c964416920475b7632ed534c7750401eb84d418ffa11222cea241317fcbbf41bbf3432498e792dd6a064e", // Provide a fallback secret
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
