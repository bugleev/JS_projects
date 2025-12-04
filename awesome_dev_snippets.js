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

function typer() {
  let handle;
  function startBlink() {
    handle = setInterval(() => {
      // show/hide .blink
      const blink = document.querySelector('.blink');
      if (!blink) return;
      blink.style.visibility = blink.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
  }
  function stopBlink() {
    const blink = document.querySelector('.blink');
    blink.style.visibility = 'visible';
    clearInterval(handle);
  }
  
  const options = ['how', 'are', 'you?'];
  
  export async function replaceTyper() {
    const typer = document.getElementById('typer');
    if (!typer) return;
    const current = typer.innerText;
    const next = options[(options.indexOf(current) + 1) % options.length];
  
    const CHAR_DELAY = 40;
    const WORD_DELAY = 2300;
  
    stopBlink();
  
    while (typer.innerText.length > 0) {
      typer.innerText = typer.innerText.slice(0, -1);
      // wait
      await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
    }
  
    // type in next
    for (let i = 0; i < next.length; i++) {
      typer.innerText += next[i];
      await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
    }
  
    startBlink();
  
    // wait
    await new Promise((resolve) => setTimeout(resolve, WORD_DELAY));
    replaceTyper();
  }
  
  startBlink();
  setTimeout(() => {
    replaceTyper();
  }, 4000);
}
