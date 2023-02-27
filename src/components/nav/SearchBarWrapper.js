import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { Link } from "gatsby";
import { Divider } from "@mui/material";

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option) => option.title,
});

const SearchBarWrapper = ({ postData }) => {
  const [id, setId] = React.useState(null);

  React.useLayoutEffect(() => {
    setId(`search-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  if (!id) {
    return null;
  }

  return (
    <Autocomplete
      key="autocomplete-search"
      sx={{
        margin: "2rem auto",
        maxWidth: "300px",
      }}
      options={postData.allContentfulBlogPost.edges.map((edge) => edge.node)}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          placeholder="Python"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          InputLabelProps={{
            htmlFor: id,
          }}
        />
      )}
      filterOptions={filterOptions}
      renderOption={(props, option) => (
        <li key={option.title}>
          <Link key={option.title} to={`/blog/${option.slug}`}>
            {option.title}
            <br />
          </Link>
          <Divider orientation="horizontal"></Divider>
        </li>
      )}
    />
  );
};

export default SearchBarWrapper;
