const express = require('express')
const router = express.Router()

const shoppingList = []
let id = 1


router
.route('')
.get((req, res) => {
    res.json(shoppingList)
})
.post((req, res) => {
    const { name, quantity } = req.body
    shoppingList.push({
        id: id++,
        name,
        quantity
    })
    res.json(shoppingList)
})

router
.route('/:id')
.get((req, res) => {
    const { id } = req.params
    const getEl = shoppingList.filter(el => el.id === id)
    res.json(getEl)
})
.patch((req, res) => {
    const { id } = req.params
    const { name, quantity } = req.body

    shoppingList.find(el => {
        if(el.id === id) {
            el.name = name
            el.quantity = quantity
        }
        
        res.json({message: 'Shopping list updated!'})
    })

})

.delete((req, res) => {
    const { id } = req.params
    if(shoppingList.length > 0) {
        const listIndex = shoppingList.findIndex(el => el.id === id)
        shoppingList.splice(listIndex, 1)
        res.json({message: "Deleted successfully!"})
    }
    
})

module.exports = router