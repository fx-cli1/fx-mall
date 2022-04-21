const jwt = require('jsonwebtoken');



const jwtSign = (data) => {
    const token = jwt.sign(data, 'fengxuan', { expiresIn: 60 * 60 })
    return token
}


const jwtCheck = (token) => {
    //前端headers传来的token值:
    jwt.verify(token, 'fengxuan', (err, data) => {
        if (err) {
            return false;
        } else {
            return true;
        }
    })
}

export default{
    jwtSign,
    jwtCheck
}