const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "a72e49f4",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  for (const movie of movies) {
    const div = document.createElement("div");

    div.innerHTML = `
        <h1>${movie.Title}</h1>
        <img src="${movie.Poster}">
      `;

    document.querySelector("#target").appendChild(div);
  }
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
