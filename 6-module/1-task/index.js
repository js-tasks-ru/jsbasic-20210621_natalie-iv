export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
    this.addTableDeleteRowListener();
  }

  render() {
    this.elem = document.createElement('table');
    this.elem.dataset.component = 'usersTable';
    this.elem.innerHTML = this.createTable({
      items: this.rows
    });
  }

  createTable ({items}) {
    return `
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>City</th>
            <th></th>
        </thead>
        <tbody>
        ${items.map((item) => `<tr>
                                <td>${item.name}</td>
                                <td>${item.age}</td>
                                <td>${item.salary}</td>
                                <td>${item.city}</td>
                                <td><button>X</button></td>
                             </tr>`)
      .join('')}
        </tbody>
  `;
  }

  addTableDeleteRowListener () {
    this.elem.onclick = ({target}) => {
      if (target.tagName === 'BUTTON') {
        let parentButton = target.parentNode;
        let currentRow = parentButton.parentNode;
        currentRow.remove();
      }
    };
  }
}
