import jwt from 'jsonwebtoken';
import { create } from '../../serverHelpers/jwt';

export default function handler(req, res) {
   
    if(req.method === 'POST') {
        const data = req.body;

        const token = create( data );       
        res.status(200).json({
            token,
            msg: 'Token creado'
        })
    }

}