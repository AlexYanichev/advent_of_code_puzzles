// input is a sting like
// forward 3
// down 7
// forward 8
// down 9
// forward 3
// down 5
// down 9
// down 6

const directions = {
  up: "up",
  down: "down",
  forward: "forward",
};

const getResultingPosition = (commandsString) => {
  const commandsArray = commandsString.split("\n");
  let coordinates = { horizontal: 0, vertical: 0 },
    aim = 0;

  for (let command of commandsArray) {
    const [direction, value] = command.split(" ");
    const numberValue = Number(value);

    if (direction === directions.down) {
      aim += numberValue;
    }

    if (direction === directions.up) {
      aim -= numberValue;
    }

    if (direction === directions.forward) {
      coordinates.horizontal += numberValue;
      coordinates.vertical += aim * numberValue;
    }
  }

  return coordinates.horizontal * coordinates.vertical;
};
