define(function (require) {
  const $ = require("jquery");
  const _ = require("lodash");
  const moment = require("moment");

  const api = require("./api");

  console.log("main");

  const container = $("#categories");

  api.getCategories().then(({ categories }) => {
    categories.items.forEach((item) => {
      container.append(`
        <div id="${item.id}" name="${item.name}" class="card bg-primary text-center mx-auto">
            <img src="${item.icons[0].url}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h2 class="card-title">${item.name}</h2>
            </div>
        </div>
      `);
    });
  });
});
