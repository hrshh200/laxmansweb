import React, { useState, useEffect } from "react";
import "../styles/navbar.css"; // Import the external CSS file

const SearchInput = () => {
  // Only keep the changing parts here (without "Search")
  const options = ["Paans...", "Chaats...", "Beverages..."];
  const [placeholder, setPlaceholder] = useState("Search ");
  const [index, setIndex] = useState(0); // which word in options
  const [subIndex, setSubIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= options.length) {
      setIndex(0);
      return;
    }

    const current = options[index];

    const timeout = setTimeout(() => {
      // Always prepend "Search " in front
      setPlaceholder(
        "Search " +
          (deleting
            ? current.substring(0, subIndex - 1)
            : current.substring(0, subIndex + 1))
      );

      setSubIndex(subIndex + (deleting ? -1 : 1));

      // finished typing
      if (!deleting && subIndex === current.length) {
        setDeleting(true);
        return;
      }

      // finished deleting
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % options.length);
      }
    }, deleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, options]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search-input"
    />
  );
};

export default SearchInput;
