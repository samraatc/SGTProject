const express = require('express');
const Login = require("../Controller/Login/Login.Controller")

const router = express.Router();



router.post("/register", Login.register);
router.post("/login",Login.login);

module.exports = router
