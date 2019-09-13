export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
export function safeAwait(promise) {
  return promise
    .then(data => {
      if (data instanceof Error) return [data];
      return [null, data];
    })
    .catch(err => [err]);
} 
export const sleep = (t = Math.random() * 200 + 300) =>
  new Promise(resolve => setTimeout(resolve, t))

export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
