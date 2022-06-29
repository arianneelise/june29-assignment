async function swapiPromise(id) {
  try {
    const data = await fetch(`https://www.swapi.tech/api/planets/${id}`).then(
      (res) => res.json()
    );
    return data;
  } catch (err) {
    return err;
  }
}

function displayPlanet() {
  const input = document.getElementById("planet-input");
  swapiPromise(input.value)
    .then((res) => {
      const planet = res["result"]["properties"]["name"];
      document.getElementById("planet-name").innerHTML = planet;
    })
    .catch((err) => {
      document.getElementById("planet-name").innerHTML = "Fail! Invalid input.";
      console.error(err);
    });
}
