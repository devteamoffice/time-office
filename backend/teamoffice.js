const serviceAccount = {
  type: "service_account",
  project_id: "teamoffice-28b46",
  private_key_id: "your-private-key-id",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk@example.iam.gserviceaccount.com",
  client_id: "your-client-id",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk%40example.iam.gserviceaccount.com",
};

module.exports = serviceAccount;
