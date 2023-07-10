const express = require("express");
const router = express.Router();
const userRoutes = require("../modules/user/user.route");

const moduleRoutes = [{ path: "/", route: userRoutes }];

moduleRoutes.forEach(route => router.use(route.path, route.route));

module.exports = router;
