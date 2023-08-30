import mongoose from "mongoose";
import chai from 'chai'
import PizzaService from '../../src/services/pizza.service.js'

mongoose.connect('mongodb://localhost:27017', { dbName: 'integradora_4_test' })
const service = new PizzaService()
const expect = chai.expect

describe('Test CRUD of Pizza Service',  () => {
    before(async function() {
        try {
            await mongoose.connection.collections.pizzas.drop()
        } catch(err) {
            console.log(err.message)
        }
    })
    it('Must return all pizzas', async () => {
        const result = await service.get()
        expect(result).to.be.deep.equal([])
    })
    it('Must create a pizza', async () => {
        const result = await service.create({
            name: 'Fugazzeta',
            size: 'medium',
            price: 100
        })
        expect(result).to.have.property('_id')
    })
})