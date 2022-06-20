"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("./routes/test"));
const app = (0, express_1.default)();
// default port
const PORT = 8000;
app.use('/', test_1.default);
app.listen(PORT, () => console.log(`Server Listening to ${PORT}`.green));
