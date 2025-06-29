import { Router } from "express";
import {isAuth} from "../middlewares/isAuth.js"

import {
    searchById,
    create,
    deleteMovie,
    update,
    getAll
} from '../controllers/movies.controller.js'

const moviesRouter = Router()

//aniadir proteccion a las rutas
moviesRouter.get('/', isAuth,(req, res)=>{
    getAll(req, res)
})


moviesRouter.get('/:id', isAuth, searchById)

moviesRouter.post('/', isAuth, create)

moviesRouter.delete('/:id', isAuth, deleteMovie)

moviesRouter.patch('/:id', isAuth, update)

export default moviesRouter