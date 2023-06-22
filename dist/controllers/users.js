"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = void 0;
// import type { User } from '../types/user'
const users_1 = require("../models/users");
const getUser = async (req, res) => {
    const uid = req.params.id;
    try {
        const userDB = await users_1.User.findById(uid);
        if (!userDB) {
            res.status(400).json({
                ok: false,
                msg: 'User not found'
            });
            return;
        }
        res.status(200).json({
            ok: true,
            user: userDB
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se encontro usuario',
            error
        });
    }
};
exports.getUser = getUser;
const createUser = async (req, res) => {
    const { email } = req.body;
    try {
        const emailExist = await users_1.User.findOne({ email });
        if (emailExist !== null) {
            res.status(400).json({
                ok: false,
                msg: 'email exist'
            });
            return;
        }
        const user = new users_1.User(req.body);
        await user.save();
        res.json({
            ok: true,
            msg: 'Info submited',
            user
        });
    }
    catch (error) {
        res.json({
            ok: false,
            msg: error
        });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const uid = req.params.id;
    try {
        const userDB = await users_1.User.findById(uid);
        const _a = req.body, { password, email } = _a, fields = __rest(_a, ["password", "email"]);
        if ((userDB === null || userDB === void 0 ? void 0 : userDB.email) !== email) {
            const existingEmail = await users_1.User.findOne({ email });
            if (existingEmail !== null) {
                res.status(400).json({
                    ok: false,
                    msg: 'The email already exist'
                });
                return;
            }
        }
        const userUpdated = await users_1.User.findByIdAndUpdate(uid, fields, { rawResult: true });
        res.json({
            ok: true,
            msg: 'User updated',
            user: userUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se encontro usuario',
            error
        });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const uid = req.params.id;
    try {
        const userDB = await users_1.User.findByIdAndDelete(uid);
        if (!userDB) {
            res.status(400).json({
                ok: false,
                msg: 'User not found'
            });
            return;
        }
        res.status(200).json({
            ok: true,
            msg: 'User deleted',
            user: userDB
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se encontro usuario',
            error
        });
    }
};
exports.deleteUser = deleteUser;
