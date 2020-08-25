/**
 * sleep in async
 * @param ms
 */
export function sleep(ms: number) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
