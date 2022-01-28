"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.status(401).json({
        ok: false,
        mgs: 'No hay token en la peticion'
    });
    res.json({
        ok: 'True',
        msg: 'Todo piola'
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
