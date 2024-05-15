import { ICustomerModel } from "@renderer/interfaces/customer"
import { loadCustomer } from "@renderer/requests/customer/load-customers"
import { useEffect, useState } from "react"

export const useCustomerModel = () => {
    const [customers, setCustomers] = useState<ICustomerModel[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)

    const fetchData = async () => {
        try {
            const response = await loadCustomer()

            console.log(response)
            if (response) {
                setCustomers(response)
            }
        } catch (error) {

        }
    }



    useEffect(() => {
        fetchData()
    }, [])

    return {
        customers,
        openModal,
        setOpenModal,
        fetchData
    }
}