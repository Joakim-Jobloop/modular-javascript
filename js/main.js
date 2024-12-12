import { fetchPeople } from "./fetchData.js";
import { modifiedPeople } from "./modifyPeople.js";
import showPeople from "./showPeople.js";

// fetch("../data/people.json")
//   .then((response) => response.json())
//   .then((data) => {
//     showPeople(data);
//     showPeople(modifiedPeople(data));
//   });

fetchPeople();
