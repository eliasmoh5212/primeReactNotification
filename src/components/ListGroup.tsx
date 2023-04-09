import { React, useState, useEffect } from "react";
import { ListBox } from "primereact/listbox";

//theme
interface Props {
  items: { name: String; disc: String }[];
  heading: String;
  onSelectItem: (itemname: String, itemDisc: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items.map(item => <li className="list-group-item">{item}</li>);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items to Display</p>}

      <div className="card flex justify-content-center col-md-5">
        <ListBox
          options={items}
          name="item"
          optionLabel="name"
          className="w-full md:w-14rem p-invalid"
          onChange={e => onSelectItem(e.name, e.disc)}
          // {(e) => onSelectItem(e.value)}
        />
      </div>
    </>
  );
}

export default ListGroup;
