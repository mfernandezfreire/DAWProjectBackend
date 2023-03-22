"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: Number(process.env.SERVER_PORT) || 8000,
    host: process.env.SERVER_HOST || '0.0.0.0',
};
