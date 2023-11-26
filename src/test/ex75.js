async function test() {
  try {
    await fetch("https://google.com");
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  await test();
}

main();