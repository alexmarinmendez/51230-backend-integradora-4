import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Pizzas', () => {
    describe('Create Pizza', () => {
        it('The endpoint POST /api/pizzas must create a pizza', async() => {
            const pizza = {
                name: 'Hawaiana',
                size: 'medium',
                price: 100
            }
            const response = await requester.post('/api/pizzas').send(pizza)
            const { status, ok, _body } = response
            expect(_body).to.have.property('_id')
        })
    })
})