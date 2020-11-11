import { createContext } from "react"

const initialTransaction = [
    {amount: 600, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
]
export const TransactionContext = createContext(initialTransaction);