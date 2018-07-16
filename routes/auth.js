'use strict';

const express = require('express');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const User = require('../models/user');

const router = express.Router();


const options = {session: false, failWithError: true};

const localAuth = passport.authenticate('local', options);

router.post('/', localAuth, function (req, res) {
  return res.json(req.user);
});



module.exports = router;