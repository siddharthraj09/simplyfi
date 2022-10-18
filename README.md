
# SimplyFI

NodeJs developer Test,CSV file (books_ed.csv) whose format is used is uploaded on github and postman API file (SimplyFi.postman_collection.json) is also provided which can be imported 

Database Used:Postgres,
ORM Used: Prisma
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`DATABASE_URL="postgresql://postgres:<your_postgres_password>@localhost:5432/BOOKS?schema=public"`



## Deployment

To deploy this project run

```bash
Step1:  npm install
```

```bash
Step2: npx prisma migrate dev
```
```bash
Step3: npm run
```


## Folder Structure

![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img1.JPG)

## Upload Csv
route:
http://localhost:3000/api/uploadCsv
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img2.JPG)

## Get all books
route:
http://localhost:3000/api/getAllBook
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img3.JPG)

## Get books by isbn
route:
http://localhost:3000/api/getBookByIsbn/:isbnId
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img4.JPG)

## get books by author email
route:
http://localhost:3000/api/getBookByEmail
Body:
{
    "email_body":"vp@abc.co"
}
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img5.JPG)

## get books by sort in ascending
route:
http://localhost:3000/api/getAllBookSort
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img6.JPG)

## add new 
route:
http://localhost:3000/api/addBook
Body :
{
    "title":"Wealth of war, The",
    "author":"Smith, Dane",
    "genre":"science",
    "height":"84",
    "publisher":"Random House",
    "category":"economics",
    "email":"dane@abc.co"
}

![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img7.JPG)

## Database Data
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img8.JPG)


