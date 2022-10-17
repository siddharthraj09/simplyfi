
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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Upload Csv
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## Get all books
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## Get books by isbn
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## get books by author email
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## get books by sort in ascending
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## add new 
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)