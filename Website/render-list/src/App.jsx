import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 6, name: "tomato", calories: 25 },
    { id: 7, name: "potato", calories: 55 },
    { id: 8, name: "celery", calories: 145 },
    { id: 9, name: "carrot", calories: 14 },
    { id: 10, name: "corn", calories: 45 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}

      {vegetables.length > 0 ? <List items={vegetables} /> : null}
    </>
  );
}

export default App;
