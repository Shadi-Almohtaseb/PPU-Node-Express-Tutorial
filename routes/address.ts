import { Router } from "express";
import { createAddressController } from "../controllers/address.js";

const router = Router()

router.post("/", async (req, res, next) => {
    try {
        const address = req.body
        if (!address.city || !address.country || !address.street) {
            return res.status(400).json({
                message: "some fields are missing",
                success: false,
            })
        }

        const newAddress = await createAddressController(address)

        res.status(201).json({
            message: "Address created successfully",
            success: true,
            data: newAddress
        })

    } catch (error) {
        next(error)
    }
})

export default router