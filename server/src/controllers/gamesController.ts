import { Request, Response } from 'express';
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
import {connect} from '../database';
import { Game } from '../interfaces/gameInterfaces';


export async function getGames(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const games = await conn.query('SELECT * FROM games');
        return res.json(games[0]);
    }
    catch (e){
        console.log(e);
    }
}

export async function createGames(req: Request, res: Response): Promise<Response> {
    const newGame: Game = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO games SET ?', [newGame]);
    return res.json({
        message: 'Game created'
    });
}

export async function getOne(req: Request, res: Response): Promise<any> {
    const id = req.params.gameId;
    const conn = await connect();
    const games = await conn.query('SELECT * FROM games WHERE id = ?', [id]);
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });
}

export async function deleteGame(req: Request, res: Response): Promise<Response> {
    const id = req.params.gameId;
    const conn = await connect();
    await conn.query('DELETE FROM games WHERE id = ?', [id]);
    return res.json({
        message: `Game ${id} deleted`
    });
}

export async function updateGame(req: Request, res: Response): Promise<Response> {
    const id = req.params.gameId;
    const updateGame: Game = req.body;
    const conn = await connect();
    await conn.query('UPDATE games set ? WHERE id = ?', [updateGame, id]);
    return res.json({
        message: `Game ${id} updated`
    });
}