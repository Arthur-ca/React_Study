import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    "NewYork",
    "San Francisco",
    "Beijing",
    "Shanghai",
    "Tokyo",
    "London",
  ];
  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;