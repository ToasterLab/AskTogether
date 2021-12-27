module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b1700275f118969e66c1dcfbae4bead0'),
  },
});
