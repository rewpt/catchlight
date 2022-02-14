import React, { useEffect, useState, useCallback } from "react";
import useDebounce from "../../hooks/useDebounce";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);
  return (
    <div className=" bg-gray-200">
      <div className="container h-[100px] flex justify-center items-center ">
        <div className="relative">
          <form
            className="search__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Search Any Movie"
              name="search"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>
          <div className="absolute top-4 right-3">
            <i>
              {" "}
              <FontAwesomeIcon
                className="fa fa-search text-gray-400 z-20 hover:text-gray-500 cursor-pointer"
                icon={faSearch}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
