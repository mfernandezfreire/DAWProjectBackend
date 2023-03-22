"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
/**
 * @description Create fastify App
 */
class App {
    static run(host, port) {
        return __awaiter(this, void 0, void 0, function* () {
            // Require the framework and instantiate it
            const app = (0, fastify_1.default)({});
            // Declare a route
            // await app.register(BaseRoute);
            app.get('/', () => __awaiter(this, void 0, void 0, function* () { return ({ hello: 'world' }); }));
            // Run the server!
            console.log(`server listenning on ${host} with port ${port}`);
        });
    }
}
exports.default = App;
