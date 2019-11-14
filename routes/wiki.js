const express = require('express');
const router = require('express').Router();
const wikipage = require('../views/main');
const addPage = require('../views/addPage')



router.get('/', (req,res,next)=> {

  res.redirect('/wiki')
})

// router.post('/', (req,res,next)=> {

//   res.send()
// })

router.get('/add', (req,res,next)=> {

  res.send(addPage())
})

module.exports = router
