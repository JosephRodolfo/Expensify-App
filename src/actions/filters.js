

//SET_TEXT_FILTER

export const setTextFilter = (update) => ({
    type: "SET_TEXT_FILTER",
    update,
  });
  
  //SORT_BY_DATE
  
  export const sortByDate = () => ({
    type: "SORT_BY_DATE",
  });
  //SORT_BY_AMOUNT
  
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
  });
  
  //SET_END_DATE
  
  export const setStartDate = (start) => ({
    type: "SET_START_DATE",
    start,
  });
  
 export const setEndDate = (end) => ({
    type: "SET_END_DATE",
    end,
  });