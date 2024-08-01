import { Address } from "../db/entities/Address.js"

const createAddressController = async (address: Address) => {
    const addressExists = await Address.findOne({ where: { city: address.city } })

    if (addressExists) {
        throw new Error("Address already exists")
    }

    const newAddress = await Address.create(address).save()

    return newAddress
}

export { createAddressController }