function clearHistory() {
    let req = new XMLHttpRequest();
    req.open("GET", document.documentURI+'?type=clear', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
}


function doAjax(x, y, r, enumerable) {
    let req = new XMLHttpRequest();
    req.open("GET", document.documentURI+`?X=${x}&Y=${y}&R=${r}&type=${enumerable ? "ajax" : "ajax-no-cache"}&offset=${offsetField.value}`, true);
    req.onload = ()=>changePage(req.responseText, enumerable);
    req.send();
}
function changePage(res, enumerable) {
    let point = JSON.parse(res);
    drawPoint(point.x, point.y, point.inArea);
    if(enumerable) {
        if (!document.getElementById("result-table")) {
            let table = document.createElement("table");
            table.id = "result-table";
            let headers = document.createElement("tr");
            headers.id = "table-headers";
            headers.innerHTML = "<th>x-coordinate</th><th>y-coordinate</th><th>Radius</th><th>Hit</th><th>Time of request</th>";
            let header = document.createElement("h1");
            header.innerText = "Query history";
            let button = document.createElement("div");
            button.innerHTML = "<button type=\"button\" onclick=\"clearHistory(); location.reload();\" id=\"history-button\" class=\"button history-button\">Clean history</button><br>";
            document.getElementsByClassName("main")[0].append(header);
            document.getElementsByClassName("main")[0].append(button);
            document.getElementsByClassName("main")[0].append(table);
            table.append(headers);

        }
        let row = document.createElement("tr");
        row.innerHTML = `<td>${point.x}</td><td>${point.y}</td><td>${point.r}</td><td>${point.inArea}</td><td>${point.time}</td>`;
        document.getElementById("table-headers").after(row);
    }
}
