# This is just a code challenge for a great company

-Install  
To install packages just type "npm install"

-Build  
To compile TS file just type "tsc"

-Run  
To run the code just type "npm start"

-Docker  
There are Dockerfile and docker_compose files and you can run it by "docker-compose up"

-Test  
To run the Test just type "npm test"

-Using  
I've created some api to check functionality

--http://localhost:3003/api/list  
at the first it deletes the whole data from the database then fetch data from the url (No.1) and then
it save all data into database (No.2)

--http://localhost:3003/api/identify  
it fetch some information form the database (No.3)

--http://localhost:3003/api/update  
Identify entries with "status" = "New iTunes Pack" and "Archive_Status" = "Encoded"
and update the status to "Transferring to UC" (No.4)

--http://localhost:3003/api/delete  
Reset database
