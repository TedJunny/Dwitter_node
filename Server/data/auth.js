let users = [
  {
    id: "1",
    username: "hamina",
    password: "$2b$10$BKL2q4pB0f5GcLbODWky/uAuKgDMr6Nzem7vrRjrODyBMo7ImTKU2",
    name: "Hamina",
    email: "minha@server.com",
    url: "https://ifh.cc/g/dEVLtA.jpg",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = {
    ...user,
    id: Date.now().toString(),
  };
  users.push(created);
  return created.id;
}
