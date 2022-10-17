
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
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img2.JPG)

## Get all books
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img3.JPG)

## Get books by isbn
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img4.JPG)

## get books by author email
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img5.JPG)

## get books by sort in ascending
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img6.JPG)

## add new 
![App Screenshot](https://github.com/siddharthraj09/simplyfi/blob/master/screenshots/img7.JPG)

