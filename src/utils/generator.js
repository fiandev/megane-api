export function randomInt(min = 10, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const randomPercen = () =>
  Math.floor(Math.random() * (100 - 10 + 1) + 10);

export const getBlobRadius = () =>
  `${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% / ${randomPercen()}% ${randomPercen()}% ${randomPercen()}% ${randomPercen()}%`;
