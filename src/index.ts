import engine from "./engine";

const pattern = process.argv[2];
const text = process.argv[3];

if (pattern && text) {
  console.log("Is text matches the pattern? ", engine(pattern, text));
} else {
  console.info("Invalid or no args passed, exiting!!!");
}
