import { modifiedPeople } from "./modifyPeople.js";
import showPeople from "./showPeople.js";

export async function fetchPeople() {
  const response = await fetch("../data/people.json");
  const data = await response.json();
  showPeople(data);
  showPeople(modifiedPeople(data));
}
