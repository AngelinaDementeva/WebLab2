function drawAxis() {
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width / 2, 0);
    ctx.lineTo(width / 2 + 3, 7);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2 - 3, 7);
    drawDigitsX(ctx, i, width, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 + 3);
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 - 3);
    drawDigitsY(ctx, i, width, height);
    ctx.stroke();
}


function drawDigitsX(ctx, i, width, height) {
    let t = width / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
    t = width / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
}

function drawDigitsY(ctx, i, width, height) {
    let t = height / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
    t = height / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
}

function drawBorderRectangle() {
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "#2dd182";
    ctx.fillStyle = "#2dd182";
    ctx.fillRect(width / 2 - 5 * i, height / 2 - 3 * i, 8 * i, 6 * i);
}

function drawArea(r) {
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "#88ff84";
    ctx.fillStyle = "#88ff84";
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.arc(width / 2, height / 2, r * i / 2, 0, Math.PI / 2, false);
    ctx.lineTo(width / 2, height / 2 + r * i);
    ctx.lineTo(width / 2 - r * i / 2, height / 2 + r * i);
    ctx.lineTo(width / 2 - r * i / 2, height / 2);
    ctx.lineTo(width / 2, height / 2 - r * i);
    ctx.fill();
}

function drawPoint(x, y, color) {
    ctx.fillStyle = (color === "Yes" ? "#318341" : "#ff2e37");
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x * i, canvas.height / 2 - y * i, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawPointsFromTable() {
    let table = document.getElementById("result-table");
    try {
        if (table.getElementsByTagName("tbody")[0]) {
            table = table.getElementsByTagName("tbody")[0];
        }
    } catch {
    }

    if (table) {
        for (let i = 0; i < table.children.length; i++) {
            let row = table.children[i];
            console.log(row.id);
            console.log(row.children[2].innerText);
            console.log(rField.value);
            if (row.id !== "table-headers" && Number(row.children[2].innerText) !== Number(rField.value)) {
                doAjax(row.children[0].innerText, row.children[1].innerText, rField.value, false)
            } else if (row.id !== "table-headers") {
                drawPoint(Number(row.children[0].innerText), Number(row.children[1].innerText), row.children[3].innerText);
            }
        }
    }
}
