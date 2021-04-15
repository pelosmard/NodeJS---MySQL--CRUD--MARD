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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGame = exports.deleteGame = exports.getOne = exports.createGames = exports.getGames = void 0;
// import pool from '../database';
/*

class GamesController {
    public async list(req: Request, res: Response): Promise<Response | void> {
        try {
            const games = await pool.query('SELECT * FROM games');
            try {
                // res.json(games);
                // console.log(games);
            }
            catch (e) {
                console.log('Catch an error res.json(games): ', e);
            }
        }
        catch (e) {
            console.log('Catch an error const games: ', e);
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        const tamano = games.length;
        console.log(tamano);
        if (tamano > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exist" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({ message: 'Game saved' });
    }

    public update(req: Request, res: Response) {
        res.json({ text: 'Updating a game ' + req.params.id });
    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Deleting a game ' + req.params.id });
    }
}

const gamesController = new GamesController();
export default gamesController;
*/
const database_1 = require("../database");
function getGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const games = yield conn.query('SELECT * FROM games');
            return res.json(games[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getGames = getGames;
function createGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newGame = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO games SET ?', [newGame]);
        return res.json({
            message: 'Game created'
        });
    });
}
exports.createGames = createGames;
function getOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.gameId;
        const conn = yield database_1.connect();
        const games = yield conn.query('SELECT * FROM games WHERE id = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    });
}
exports.getOne = getOne;
function deleteGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.gameId;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM games WHERE id = ?', [id]);
        return res.json({
            message: `Game ${id} deleted`
        });
    });
}
exports.deleteGame = deleteGame;
function updateGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.gameId;
        const updateGame = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE games set ? WHERE id = ?', [updateGame, id]);
        return res.json({
            message: `Game ${id} updated`
        });
    });
}
exports.updateGame = updateGame;
