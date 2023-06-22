"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const users_1 = require("../controllers/users");
const express_validator_1 = require("express-validator");
const validations_1 = require("../middlewares/validations");
exports.router = (0, express_1.Router)();
exports.router.get('/:id', users_1.getUser);
exports.router.post('/', [
    (0, express_validator_1.check)('name', 'The name is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('password', 'The password is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('email', 'The email is mandatory').not().isEmpty().isEmail(),
    validations_1.campsValidate
], users_1.createUser);
exports.router.put('/:id', [
    (0, express_validator_1.check)('name', 'The name is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('password', 'The password is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('email', 'The email is mandatory').not().isEmpty().isEmail(),
    validations_1.campsValidate
], users_1.updateUser);
exports.router.delete('/:id', users_1.deleteUser);
