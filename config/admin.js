module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37bae46fccab37b1c9aad2ebff01b3ff'),
  },
});
