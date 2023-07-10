const express = require("express");
const router = express.Router();
const userRoutes = require("../modules/user/user.route");
const characterRoutes = require("../modules/character/character.route");
const castRoutes = require("../modules/cast/cast.route");

const moduleRoutes = [
    { path: "/user", route: userRoutes },
    { path: "/character", route: characterRoutes },
    { path: "/cast", route: castRoutes }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

module.exports = router;
