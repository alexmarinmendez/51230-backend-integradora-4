import PizzaModel from "../models/pizza.model.js";
import { logger } from '../utils.js'
import sendMail from "../utils/email.utils.js";

export default class PizzaService {
    get = async() => await PizzaModel.find()

    getbyId = async(id) => await PizzaModel.findById(id)

    create = async(object) => {
        try {
            if (!object.name) throw "Must get a name"
            return await PizzaModel.create(object)
        } catch(err) {
            logger.error(err)
            return {}
        }
    }

    update = async(id, object) => await PizzaModel.updateOne({ _id: id }, { $set: object })

    delete = async(id) => await PizzaModel.deleteOne({ _id: id })

    changeNameByEmail = async(id) => {
        const result = await sendMail({
            to: 'jmsocorro@gmail.com',
            subject: 'Cambiar el nombre de la Pizza',
            html: `
            <h2>Ingresa a este link</h2>
            <a href="http://localhost:8080/api/pizzas/change-name/${id}">Cambiar nombre</a>`
        })
    }
}