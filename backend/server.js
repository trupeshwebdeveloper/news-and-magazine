import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Is Ready");
});

app.get("/api/funny", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 2,
      title: "b Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 3,
      title: "c Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 4,
      title: "D Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 5,
      title: "E Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 6,
      title: "F Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 7,
      title: "G Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 8,
      title: "H Joke",
      content: "i Don't have any Jokes",
    },
    {
      id: 9,
      title: "J Joke",
      content: "i Don't have any Jokes",
    },
  ];
  res.send(jokes);
});

app.get("/api/meganewsteam", (req, res) => {
  const MegaNewsTeam = [
    {
      id: 1,
      position: "designer",
      Name: "behzad pashaei",
      img: "https://i.pravatar.cc/150",
    },
    {
      id: 2,
      position: "programmer",
      Name: "Cassie Evans",
      img: "https://i.pravatar.cc/151",
    },
    {
      id: 3,
      position: "Marketing",
      Name: "Louis Hoebregts",
      img: "https://i.pravatar.cc/152",
    },
    {
      id: 4,
      position: "administrative",
      Name: "Patricia",
      img: "https://i.pravatar.cc/153",
    },
    {
      id: 5,
      position: "CEO",
      Name: "James Hoebregts",
      img: "https://i.pravatar.cc/154",
    },
    {
      id: 6,
      position: "Financial",
      Name: "Jon Kantner",
      img: "https://i.pravatar.cc/155",
    },
  ];

  if (req.query.search) {
    const filterItems = MegaNewsTeam.filter((MegaNewsTeam) =>
      MegaNewsTeam.Name.includes(req.query.search)
    );
    res.send(filterItems);
    return;
  }

  setTimeout(() => {
    res.send(MegaNewsTeam);
  }, 2000);
});

app.listen(3000, () => {
  console.log(`My Server Log`);
});
