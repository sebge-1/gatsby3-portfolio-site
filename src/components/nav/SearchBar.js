import * as React from "react";
import { Autocomplete, Divider, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { Link } from "gatsby";

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option) => option.title,
});

const SearchBar = ({ postData }) => {
  const [id, setId] = React.useState(null);
  React.useEffect(() => {
    setId(`search-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  if (!id) {
    return null;
  }
  return (
    <Autocomplete
      key="autocomplete-search"
      freeSolo
      sx={{
        width: 200,
        marginLeft: "auto",
        mr: "1rem",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
      disableClearable
      options={postData.allContentfulBlogPost.edges.map((edge) => edge.node)}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Posts"
          sx={{ input: { color: "#fff" } }}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          InputLabelProps={{
            style: { color: "#fff" },
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

export default SearchBar;
