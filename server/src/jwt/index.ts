const jwt = require('jsonwebtoken');



const jwtSign = (data) => {
    const token = jwt.sign(data, 'fengxuan', { expiresIn: 60 * 60 })
    return token;
}


const jwtCheck = (token: string): any => {
    //前端headers传来的token值:
    return jwt.verify(token, 'fengxuan', (err, data) => {
        if (err) {
            return false;
        } else {
            return data;
        }
    })
}

export default {
    jwtSign,
    jwtCheck
}