// import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

//   const message = items.length === 0 ? <p>No item found</p> : null;

//   const getMessage = () => {
//     return items.length === 0 ? <p>No item found</p> : null;
//   };

  // event handler
//   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {message}{getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
