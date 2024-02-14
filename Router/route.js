// import express
const express = require('express')

const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')



// create a router object of express to define routes(paths)
const router = new express.Router()

//using router object to define paths

//1.Register API routes - localhost:4000/register
router.post('/register',userController.register)

//2.Login API routes - localhost:4000/login
router.post('/login',userController.login)

//3.add user project api routes - localhost:4000/project/add
router.post('/project/add',jwtMiddleware, multerConfig.single('projectImage'), projectController.addUserProject)


//4.get user project API routes - localhost:4000/project/all-user-projects
router.get('/project/all-user-projects',jwtMiddleware,projectController.getUserProject)

//5.get all projects routes - locahost:4000/project/all-projects
router.get('/project/all-projects',jwtMiddleware,projectController.getAllProjects)

//6.get home page routes - localhost:4000/project/home-projects
router.get('/project/home-projects',projectController.getHomeProjects)

//7.update project routes - localhost:4000/project/update-project/7890278168
router.put('/project/update-project/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

//8.delete project routes - localhost:4000/projects/delete-project/8328795638
router.delete('/project/delete-project/:pid',jwtMiddleware,projectController.deleteProject)


module.exports  = router


