import db from '../config/database.js';

export async function insertDatabase(user: string, result: string) {
    if (result === "win") {
        await db.query(`
            UPDATE users
            SET wins = wins + 1
            WHERE username = ?
        `, [user]);
    }
    else if (result === "loss") {
        await db.query(`
            UPDATE users
            SET losses = losses + 1
            WHERE username = ?
        `, [user]);
    }
    else if (result === "draw") {
        await db.query(`
            UPDATE users
            SET draws = draws + 1
            WHERE username = ?
        `, [user]);
    }
}

export async function getRanking() {
    
}