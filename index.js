let h1 = document.createElement('h1');
h1.innerText = "My HTML adventure";
let body = document.querySelector('body');
body.append(h1);

let p = document.createElement('p');
p.innerHTML="This text is <strong>strong</strong> and <em>emphasized</em> and <a href=''>linked</a>";
body.append(p);

let table = document.createElement('table');
body.append(table);