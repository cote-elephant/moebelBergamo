const DB_URL = "http://localhost:7777";

export const fetchData = async (endpoint) => {
  if (!endpoint && typeof endpoint !== "string") {
    throw new Error("an invalid endpoint");
  }
  try {
    return fetch(`${DB_URL}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
        // console.log(data);
      });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
