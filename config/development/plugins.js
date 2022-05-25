module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "bucketname.appspot.com",
        publicFiles: true,
        uniform: false,
        serviceAccount: JSON.parse(env("GOOGLE_SERVICE")),
        baseUrl: "https://storage.googleapis.com/bucket_name",
        basePath: "",
      },
    },
  },
});
