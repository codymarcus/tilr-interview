export const sortByLastName = (a, b) => {
  const nameA = a.lastName.toUpperCase();
  const nameB = b.lastName.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}
