exports.seed = async function (knex) {
  await knex("users").insert([
    {
      id: 1,
      username: "p1",
      password: "p1",
      department: "Website Development",
    },
    { id: 2, username: "p2", password: "p2", department: "Public Relations" },
  ]);
};
