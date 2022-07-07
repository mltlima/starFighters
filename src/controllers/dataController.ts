import { Request, Response } from 'express';
import * as dataService from '../services/dataService.js';

export async function battle(req : Request, res : Response) {
    try {
        const { firstUser, secondUser } : { firstUser: string, secondUser: string } = req.body;

        if (!firstUser || !secondUser) {
            return res.sendStatus(422);
        }

        const battle = await dataService.battle(firstUser, secondUser);

        res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function ranking(req : Request, res : Response) {
    //const ranking = await dataService.ranking();
    res.send(ranking);
}