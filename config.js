// Configuration des paramètres d'intégration

module.exports = {
  salesforce: {
    clientId: 'YOUR_SALESFORCE_CLIENT_ID',
    clientSecret: 'YOUR_SALESFORCE_CLIENT_SECRET',
    redirectUri: 'https://your-production-url.com/auth/callback' // TODO: Update for production
  },
  googleDrive: {
    clientId: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_DRIVE_CLIENT_SECRET'
  },
  // Autres configurations d'intégration ici
};