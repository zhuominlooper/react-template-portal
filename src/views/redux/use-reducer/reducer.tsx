function CountReducer(state: number, action: { type: string; data: number }) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return state + data;
    case "decrement":
      return state - data;
  }
}

export default CountReducer;
