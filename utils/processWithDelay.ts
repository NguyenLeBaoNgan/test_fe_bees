export async function processWithDelay(
  numbers: number[],
  delayTime: number,
  signal?: AbortSignal
): Promise<void> {
  if (
    !Array.isArray(numbers) ||
    !numbers.every((num) => typeof num === "number")
  ) {
    throw new Error("Invalid input: Must be an array of numbers");
  }

  for (let i = 0; i < numbers.length; i++) {
    if (signal?.aborted) {
      console.log("Process cancelled.");
      return;
    }
    console.log(numbers[i]);
    await new Promise((res) => setTimeout(res, delayTime));
    console.log(`Progress: ${((i + 1) / numbers.length) * 100}%`);
  }
}

const controller = new AbortController();
processWithDelay([1, 2, 3, 4, 5], 1000, controller.signal);

//cancel the process after 2.5 seconds
setTimeout(() => controller.abort(), 2500);
