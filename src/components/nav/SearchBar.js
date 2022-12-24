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
      sx={{ width: 200, marginLeft: "auto" }}
      disableClearable
      options={postData.allContentfulBlogPost.edges.map((edge) => edge.node)}
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
        <>
          <Link to={`/blog/${option.slug}`}>
            {option.title}
            <br />
          </Link>
          <Divider orientation="horizontal"></Divider>
        </>
      )}
    />
  );
};

export default SearchBar;
