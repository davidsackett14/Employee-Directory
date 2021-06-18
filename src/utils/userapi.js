const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=20&nat=us");
  return await res.json();
};
export default fetchUsers;
