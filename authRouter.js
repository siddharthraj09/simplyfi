// import passport from "passport";
import express from "express";
import {
  uploadCsv,
  getAllBook,
  getBookByIsbn,
  getBookByEmail,
  getAllBookSort,
  addBook,
  
} from "./booksController.js";
const router = express.Router();
import { uploadFile } from "./middleware/upload.js";

router.route("/uploadCsv").post(uploadFile.single("file"), uploadCsv);
addBook;
router.route("/addBook").post(addBook);
router.route("/getAllBook").get(getAllBook);
router.route("/getAllBookSort").get(getAllBookSort);
router.route("/getBookByIsbn/:id").get(getBookByIsbn);
router.route("/getBookByEmail").get(getBookByEmail);

export default router;
