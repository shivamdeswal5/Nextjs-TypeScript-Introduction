import React from 'react'

export const Customer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <div>Customer</div>
}
