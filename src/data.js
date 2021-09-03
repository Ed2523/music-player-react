import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Dawn",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17941",
      color: ["#484E64", "#546E83"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },



    //ADD MORE HERE
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   audio: "",
    //   color: ["", ""],
    //   id: uuidv4(),
    //   active: true,
    // },
  ];
}

export default chillHop;
