const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

const {User} = db

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        let {password, ...rest} = req.body
    
        const user = await User.create({
            ...rest,
            passwordDigest: await bcrypt.hash(password, 10)
        })
        res.json(user)
        console.log(user)
    } catch (error) {
        console.error('An error occured:', error)
    }
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router