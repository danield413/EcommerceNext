import jwt from 'jsonwebtoken';

export const verify = ( token ) => {
    const res = jwt.verify( token, 'asdasdasdjejejeje0987654321ajaañañañaañy');
    return res;
}

export const create = ( data ) => {
    const token = jwt.sign( data, 'asdasdasdjejejeje0987654321ajaañañañaañy', {
    expiresIn: 60 * 90 * 24 //24 hrs
    })
    return token;
}
