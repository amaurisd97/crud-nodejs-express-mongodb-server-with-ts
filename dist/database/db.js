"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONN = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//  Crear la conexion con la BD
const DB_CONN = async () => {
    try {
        if (typeof process.env.DB_CONN === 'string') {
            await mongoose_1.default.connect(process.env.DB_CONN);
            console.log('in');
        }
    }
    catch (error) {
        process.exit(1);
    }
};
exports.DB_CONN = DB_CONN;
