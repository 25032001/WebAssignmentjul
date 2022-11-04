const searchhere = (e) => {
    const value = e.target.value;
    SearchResults(value);
  };
  const SearchResults = (searchQuery = "") => {
    const filter = emojiList.filter((e) => {
      if (e.description.indexOf(searchQuery) !== -1) {
        return true;
      }
      if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
        return true;
      }
    });
    const parent = document.getElementById("emoji-table");
    parent.innerHTML = "";
    filter.forEach((e) => {
      const new_row = document.createElement("tr");
      const new_emoji = document.createElement("td");
      const new_aliases = document.createElement("td");
      const new_desc = document.createElement("td");
      new_emoji.innerHTML = e.emoji;
      new_aliases.innerHTML = e.aliases.join(",");
      new_desc.innerHTML = e.description;
  
      new_row.appendChild(new_emoji);
      new_row.appendChild(new_aliases);
      new_row.appendChild(new_desc);
      parent.appendChild(new_row);
    });
  };
  
  document.getElementById("search-bar").addEventListener("keyup", searchhere);
  
  SearchResults();
  