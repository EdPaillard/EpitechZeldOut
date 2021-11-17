# Project ZeldTech to close the Web Seminar at Epitech. 

Stack used for this project : Full JavaScript with :<br><br><br><br>
                              Front end :<br><br> Vanilla JS, CSS hand made and Materialize( both JS and CSS) <br><br>
                              Back end :<br><br> Node.js for the server with the express Framework to make it a tad easier. <br> 
                                         The database is setup with Postgres. <br><br>
                                         Libraries used: <br><br> bcrypt for encrypting the password ( 10 round of salt)  <br>
                                                        express-session to register if a user is connected <br>
                                                        cors to allow Cross Origin request.  <br>

                                                        
                                                        
    To render the work : we used the ejs view engine. 
    As we were not allowed to use Object Relationnal Mapping such as Sequelize, we could not  find a way around registering users(
     initially tried with JWT but needed models to work with, and models are defined with ORM. 
                                         
## TO START 

  Clone the repo into whatever folder you'd like.  <br>
  Go to StepView, as the final version is located here. DO NOT NODE INDEX if you are not located in /StepView  <br>
  Proceed to set up the database ( postgres is required to work.)  <br>
  sudo -i -u postgres <br>
  psql <br>
  You need to create the admin of the database :<br>
  Start with the role : <br> 
  CREATE ROLE "zeldout_admin" WITH LOGIN PASSWORD 'zeld';
<br> then <br>
  CREATE DATABASE zeldout WITH OWNER zeldout_admin; <br>
  exit;<br>
  psql -U zeldout_admin -d zeldout -f 'PLEASE COPY PASTE ABSOLUTE PATH TO create_db.sql file located in step01'  <br>
  
  If error like this psql: error: FATAL:  Peer authentication failed for user "zeldout_admin" <br> 
  proceed to <br>
  sudo nano /etc/postgresql/12/main/pg_hba.conf <br> 
  Proceed to the following changes : ( instead of peer change by the following values : ident and md5 ) <br> 
  Database administrative login by Unix domain socket <br> 
local   all             postgres                                ident<br> 

 TYPE  DATABASE        USER            ADDRESS                 METHOD<br> 

 "local" is for Unix domain socket connections only<br> 
local   all             all                                     md5  <br> 
<br>
<br>
When it's done , proceed to restart postgres service with :
  <br> sudo service postgresql restart <br> 

The error should be fixed , try again to psql -U zeldout_admin -d zeldout -f 'PLEASE COPY PASTE ABSOLUTE PATH TO create_db.sql file located in step01'  <br>
  You should obtain a result like this :  <br>
  CREATE TABLE <br>
  CREATE TABLE <br>
  CREATE TABLE <br>
  CREATE TABLE <br>
  INSERT 0 8 <br>
  INSERT 0 10 <br>
  INSERT 0 7 <br>
  INSERT 0 2 <br>
  COMMIT <br>


  Then go to StepView folder and <br> :
  - proceed with npm : npm install (( to install all dependencies required for the project to work)) <br>
  - and launch the server with node index.js <br>
<br> 
## Please Check if <br>
Check if you have .env in the root of StepView folder as it is required as well. <br><br>

  
 # Enjoy! 
  
