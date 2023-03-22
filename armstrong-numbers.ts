export function isArmstrongNumber(number: number | bigint): boolean {
  if (typeof number !== "bigint") {
    number = BigInt(number);
  }
  const len: bigint = BigInt(number.toString().length);
  return (
    number
      .toString()
      .split("")
      .map((val) => BigInt(val))
      .reduce(
        (prev: bigint, current: bigint) => prev + current ** len,
        BigInt(0)
      ) === number
  );
}
