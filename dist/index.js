"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = require("./routes/users");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = String(process.env.PORT);
(0, db_1.DB_CONN)().catch(console.log);
app.use(express_1.default.json());
app.use('/api', users_1.router);
app.listen(PORT, () => {
    console.log(`connected:http://localhost:${PORT}`);
});
