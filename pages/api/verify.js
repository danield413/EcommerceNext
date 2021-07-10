// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken';
import { create, verify } from '../../serverHelpers/jwt';

export default function handler(req, res) {

  if(req.method === 'POST'){
    const token = req.body.token;

    try {
      const resp = verify( token );

      if( resp ) {

        const data = {
          displayName: resp.displayName,
          uid: resp.uid,
          email: resp.email,
          picture: resp.picture
        }
  
        const newToken = create( data );
  
        res.status(200).json({
          ok: true,
          token: newToken,
          data: data,
          msg: 'Nuevo token generado'
        })

      }

    } catch (error) {
      
      res.status(401).json({
        ok: false,
        msg: 'Token no válido'
      })

    }

  }
}