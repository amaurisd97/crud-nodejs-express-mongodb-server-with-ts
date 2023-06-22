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
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.UserSchema.method('toJSON', function () {
    const _a = this.toObject(), { _id, password } = _a, object = __rest(_a, ["_id", "password"]);
    object.uid = _id;
    return object;
});
exports.User = (0, mongoose_1.model)('Users', exports.UserSchema);
