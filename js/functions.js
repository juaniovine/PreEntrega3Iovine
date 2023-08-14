// navbar links
links.forEach((menu) => {
    uls.innerHTML+= `
        <li class="nav-menu">
            <a class="nav-link" href="/content/${menu.page}.html">${menu.link}</a>
        </li>
    `
})

// const listItems = links.map((menu) => `
//     <li class="nav-menu">
//         <a class="nav-link" href="/content/${menu.page}.html">${menu.link}</a>
//     </li>
// `);

// uls.innerHTML = listItems.join('');
