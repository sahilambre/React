import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // !alphabetical

  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // !reverse alphabetical

  // fruits.sort((a, b) => a.calories - b.calories); // !numeric sorting
  // fruits.sort((a, b) => b.calories - a.calories); // !reverse numeric sorting

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const lhighCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //!displaying fruits
  //   const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name} : &nbsp; <b>{fruit.calories}</b>
  //     </li>
  //   ));

  //!
  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  //   const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name} : &nbsp; <b>{fruit.calories}</b>
  //     </li>
  //   ));

  //! displaying low cal fruits
  //   const listItems = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruits.id}>
  //       {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
  //     </li>
  //   ));

  //! displaying high cal fruits
  //   const listItems = lhighCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b>
  //     </li>
  //   ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.proptype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  item: [],
};

export default List;
