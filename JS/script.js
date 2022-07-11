fetch("http://www.boredapi.com/api/activity/")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data)
        })
        .catch(function (err) {
          console.error(err);
        });