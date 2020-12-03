# Anywhere_Doctor

# How to test Bot

1. Install nodemon 
```
npm install -g nodemon
```
2. Clone the repository
3. Go to inside Bot directory
4. Install node modules 
```
npm install
```
5. After this, use index.js to run the service on [localhost:8081](https://localhost:8081) and sudo mongod/mongo on another terminal to create and connect with a local mongo database.
```
nodemon index.js
```
*On other terminal*
```
sudo mongod
```
6. On you browser (use chrome) open http://localhost:8081/

