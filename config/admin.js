module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '058a86fc2d329f7225bbd413178dad2f'),
  },
});
