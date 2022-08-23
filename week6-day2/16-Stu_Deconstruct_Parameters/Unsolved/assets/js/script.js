fetch(
  // Explain each parameter in comments below.
  "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
async function getApi() {
  let response = await fetch(
    "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
  );
  let data = await response.json();
  console.log(data);
}
getApi();
