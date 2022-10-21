const $ = (name) => document.querySelector(name);

const inputName = $("#input-name");
const btnCreate = $("#btn-create");
const tbody = $("#tbody");

const data = {};

inputName.onkeyup = function (event) {
  data.name = event.target.value;
};

async function getCategories() {
  try {
    const result = await get("/category");
    result.forEach((category) => renderRow(category));
  } catch (error) {
    console.log(error);
  }
}

getCategories();

btnCreate.onclick = async function () {
  try {
    const result = await post("/category", data);
    inputName.value = "";
    renderRow(result);
  } catch (error) {
    console.log(error);
  }
};

function renderRow(category) {
  tbody.innerHTML += `
        <tr>
          <td>${category.id}</td>
          <td>${category.name}</td>
        </tr>
      `;
}
