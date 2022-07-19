import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Dropdown.css';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [state, setState] = useState("Select The Fruit")
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const fruits = ['Apple', 'Mango', 'Orange', 'Banana' ]
  return (
    <Dropdown isOpen={dropdownOpen} toogle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem>Header</DropdownItem>
          <DropdownItem>Action</DropdownItem> */}

          {fruits.map((val)=>{
            return <DropdownItem>val</DropdownItem>
          })}
        </DropdownMenu>
    </Dropdown>
  );
}

export default Example;