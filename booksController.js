import fs from "fs";
import csv from "fast-csv";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { StatusCodes } from "http-status-codes";

import {
  NotFoundError,
  BadRequestError,
  UnAuthenticatedError,
} from "./errors/index.js";

const uploadCsv = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    var newData;
    let csvData = [];
    let path = "file" + "/uploads/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        csvData.push(row);
      })

      .on("end", async () => {
        console.log(csvData);

        for (let i = 0; i < csvData.length; i++) {
          let title = csvData[i].title;
          let author = csvData[i].author;
          let genre = csvData[i].genre;
          let height = csvData[i].height;
          let publisher = csvData[i].publisher;
          let category = csvData[i].category;
          let email = csvData[i].email;
          const emailAlreadyExist = await prisma.Book.findUnique({
            where: {
              email: email,
            },
          });
          if (emailAlreadyExist) {
            console.log("Email Already Exist");
          } else {
            await prisma.Book.create({
              data: {
                title: title,
                author: author,
                genre: genre,
                height: height,
                publisher: publisher,
                category: category,
                email: email,
              },
            });
          }
        }
      });
    res.status(200).send({ msg: "CsvUploded" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getAllBook = async (req, res) => {
  const allBooks = await prisma.Book.findMany({});
  if (!allBooks) {
    throw new BadRequestError("No books found");
  }
  res.status(StatusCodes.OK).send(allBooks);
};

const getBookByIsbn = async (req, res) => {
  const { id: isbn_p } = req.params;

  const book = await prisma.book.findUnique({
    where: {
      isbn: isbn_p,
    },
  });
  if (!book) {
    throw new BadRequestError("Book not found");
  }
  res.status(StatusCodes.OK).send(book);
};

const getBookByEmail = async (req, res) => {
  const {email_body} = req.body;

  const book = await prisma.book.findUnique({
    where: {
      email: email_body,
    },
  });
  if (!book) {
    throw new BadRequestError("Book not found");
  }
  res.status(StatusCodes.OK).send(book);
};
const getAllBookSort = async (req, res) => {
  const allBooks = await prisma.Book.findMany({
    orderBy: [
      {
        title: "asc",
      },
    ],
  });
  if (!allBooks) {
    throw new BadRequestError("No books found");
  }
  res.status(StatusCodes.OK).send(allBooks);
};

const addBook = async (req, res) => {
  const { title, author, genre, height, publisher, category, email } = req.body;
  const addedBook = await prisma.book.create({
    data: {
      title: title,
      author: author,
      genre: genre,
      height: height,
      publisher: publisher,
      category: category,
      email: email,
    },
  });

  res.status(StatusCodes.OK).json({ "Single book added": addedBook });
};

export {
  uploadCsv,
  getAllBook,
  getBookByIsbn,
  getBookByEmail,
  getAllBookSort,
  addBook,
};
