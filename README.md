# Railway Management System

1. Create a .env file in root folder.

2. Populate ".env" file with
   DB_USERNAME=<user_name>\
   DB_PASSWORD=<password>\
   DATABASE=<database_name>\
   DB_PORT=3306\
   DB_HOST=localhost\
   SECRET=<any text>

Eg:

DB_USERNAME=root\
DB_PASSWORD=password\
DATABASE=railway_database\
DB_PORT=3306\
DB_HOST=localhost\
SECRET=keyboard cat

3. Install Node Module with

```bash
npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME`

`DB_PASSWORD`

`DATABASE`

`DB_PORT`

`DB_HOST`

`SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/M-B-Ali/Railway-TimeTable.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

OR for development server

```bash
  npm run devstart
```

Then go to http://localhost:3000/getStarted to Initilize sample data.
