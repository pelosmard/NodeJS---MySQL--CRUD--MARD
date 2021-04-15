import { Router } from 'express';
/*
import  gamesController from '../controllers/gamesController';

class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
*/
import {getGames, createGames, getOne, deleteGame, updateGame} from '../controllers/gamesController'

const router = Router();

router.route('/')
    .get(getGames)
    .post(createGames); 

router.route('/:gameId')
    .get(getOne)
    .delete(deleteGame)
    .put(updateGame);

export default router;