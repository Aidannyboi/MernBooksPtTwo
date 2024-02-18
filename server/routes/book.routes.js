import {Router} from "express";
import { createBook, deleteOneBook, getAllBooks, getOneBook, updateOneBook } from "../controllers/book.controller";

const router = Router()

router.route("/books")
    .get(getAllBooks)
    .post(createBook)

router.route("/book/:id")
    .get(getOneBook)
    .put(updateOneBook)
    .delete(deleteOneBook)


export default router