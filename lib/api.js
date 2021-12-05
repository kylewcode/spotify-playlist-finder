define(function (require) {
  const $ = require("jquery");

  const AUTH_TOKEN =
    "BQBf6utcvc5ZLgECYemfQKfpoQJe52ulNc0sIEYSx5IXLx4pt4ruzxe42KXK-shOlGun8P4vIP8rdZD76qshyCfZ4w0CTsOR9bzfgIlhp4kxxl9o-IshkgvVoOpdO1zoN-JDF-SFMhxoElw";

  const BASE_URL = "https://api.spotify.com/v1";

  return {
    getCategories: function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: BASE_URL + "/browse/categories",
          method: "GET",
          headers: {
            Authorization: "Bearer " + AUTH_TOKEN,
          },
          success: (data, status) => {
            console.log("getCategories: ", data);
            resolve(data);
          },
          error: (err) => {
            if (err.status === 401) {
              alert("Spotify Auth Token is Invalid");
            } else {
              reject(err);
            }
          },
        });
      });
    },
    getPlaylists: function (category) {
      return new Promise((resolve, rejects) => {
        $.ajax({
          url: BASE_URL + `/browse/categories/${category}/playlists`,
          method: "GET",
          headers: {
            Authorization: "Bearer " + AUTH_TOKEN,
          },
          success: (data, status) => {
            console.log("getPlaylists: ", data);
            resolve(data);
          },
          error: (err) => {
            if (err.status === 401) {
              alert("Spotify Auth Token is Invalid");
            } else {
              reject(err);
            }
          },
        });
      });
    },
  };
});
