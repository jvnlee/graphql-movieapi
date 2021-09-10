export const people = [
  {
    id: "0",
    name: "Hyun Jun",
    age: 26,
    gender: "male",
  },
  {
    id: "1",
    name: "Soo Min",
    age: 27,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
