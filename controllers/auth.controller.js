import jwt from 'jsonwebtoken'
import { success } from 'zod/v4'

export const login = (req, res) => {
    const data = {
        id: 123456,
        name: 'Kenneth Ramirez',
        email: 'karamirezm@unah.hn',
        password: '',
        role: 'admin',
        phone: '9999-9999'
    }

    const payload = {
        id: data.id,
        role: data.role
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        algorithm: 'HS256',
        expiresIn: '1h'
    })

    delete data.password

    res.json({
        success: true,
        message: 'Usuario autenticado correctamente.',
        data: data,
        token
    })
}