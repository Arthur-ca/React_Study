import { useState } from "react";
import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  // let items = [
  //   "NewYork",
  //   "San Francisco",
  //   "Beijing",
  //   "Shanghai",
  //   "Tokyo",
  //   "London",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alert>
        Hello <span>World</span>
      </Alert>
      */}
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
