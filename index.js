const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "a72e49f4",
      s: searchTerm,
    },
  });
  return response.data.Search;
};

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
