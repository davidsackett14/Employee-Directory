const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=4");
  return await res.json();
};
export default fetchUsers;
