import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
  sortOrder: string;
}

const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
  sortOrder,
}: SortSelectorProps) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder,
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Orderby: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
