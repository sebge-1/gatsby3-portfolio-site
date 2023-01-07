import * as React from "react";
import { Autocomplete, Divider, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { Link } from "gatsby";

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option) => option.title,
});

const SearchBar = ({ postData }) => {
  return (
    <Autocomplete
      freeSolo
      sx={{ width: 200, marginLeft: "auto", mr: "1rem" }}
      disableClearable
      options={postData.allContentfulBlogPost.edges.map((edge) => edge.node)}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Posts"
          InputProps={{
            ...params.InputProps,
            type: "search",
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

export default SearchBar;
