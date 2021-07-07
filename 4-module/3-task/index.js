function highlight(table) {
  const body = table.tBodies[0];
  for (let i = 0; i < body.rows.length; i++) {
    if (body.rows[i].cells[1].innerText < 18) {
      body.rows[i].style.textDecoration = 'line-through';
    }
    if (body.rows[i].cells[2].innerText === 'm') {
      body.rows[i].classList.add('male');
    }
    if (body.rows[i].cells[2].innerText === 'f') {
      body.rows[i].classList.add('female');
    }
    if (body.rows[i].cells[3].dataset.available === undefined) {
      body.rows[i].setAttribute('hidden', 'hidden');
    } else if (body.rows[i].cells[3].dataset.available === 'true') {
      body.rows[i].classList.add('available');
    } else if (body.rows[i].cells[3].dataset.available === 'false') {
      body.rows[i].classList.add('unavailable');
    }
  }
}
