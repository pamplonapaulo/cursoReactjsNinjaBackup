import React, { createContext, useState } from 'react'
import t from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)

  function addPizzaToOrder (pizza) {
    if (orderInProgress) {
      return addPizza((piizas) => pizzas.concat(newPizza(pizza)))
    }
    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  function newPizza (pizza) {
    return {
      id: uuidv4(),
      ...pizza
    }
  }

  function removePizzaFromOrder (id) {
    addPizza((pizzas) => pizzas.filter(p => p.id !== id))
  }

  function sendOrder () {
    console.log('send order')
    addPizza([])
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder,
      removePizzaFromOrder,
      sendOrder
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }
