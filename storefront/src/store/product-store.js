// Initial State
const initialState = [
  { name: "Apples", inStock: "14", price: "1.00", category: "food", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" },
  { name: "Calzones", inStock: "11", price: "5.00", category: "food", image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fsem9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { name: "Burgers", inStock: "12", price: "12.00", category: "food", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { name: "Pizza", inStock: "10", price: "15.00", category: "food", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
  { name: "1TB USB", inStock: "750", price: "700", category: "Electronics", image: "https://images.unsplash.com/photo-1611067480948-dac39ba1f1ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" },
  { name: "Monitor", inStock: "500", price: "350", category: "Electronics", image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" },
  { name: "Mouse", inStock: "800", price: "200", category: "Electronics", image: "https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80" },
  { name: "Keyboard", inStock: "100", price: "250", category: "Electronics", image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80" },
  { name: "Tv", inStock: "1000", price: "900", category: "Electronics", image: "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" }
]


// Reducer Function
// action is an object with: type and payload
export default function reducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case "CATEGORY":
      // filter the state by the payload
      console.log(payload)
      if (!payload) { return initialState }
      let listByCategory = initialState.filter(item => item.category === payload)
      return listByCategory
    case "ADD":
      return state;
    default:
      return state;
  }

}

// Action Creators
export function switchCategory(category) {
  return {
    type: "CATEGORY",
    payload: category
  }
}


// maybe this could get a person?
export function get(role) {
  return {
    type: "GET",
    payload: role
  }
}
