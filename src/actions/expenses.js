import { v4 as uuidv4 } from "uuid";


//ADD_EXPENSE

export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0,
  } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    },
  });
  //REMOvE_EXPENSE
  
 export const removeExpense = ({ id } = {}) => ({
    id,
  
    type: "REMOVE_EXPENSE",
  });
  
  //EDIT_EXPENSE
  
 export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
  });