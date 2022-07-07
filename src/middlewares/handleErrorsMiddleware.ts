import { Request, Response, NextFunction } from 'express';

const serviceErrorToStatusCode = {
    notFound: 404,
};

export function notFound() {
    return {type: "user not found", 
            statusCode: "404"};
}

export default function errorHandling(err, req: Request, res: Response, next: NextFunction) {
    if (err.type) {
        res.sendStatus(serviceErrorToStatusCode[err.type]);
    }
    console.log(err);
    res.status(500).send('Something broke!');
}