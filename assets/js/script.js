/**
 * Description placeholder
 * @date 1/13/2024 - 2:58:26 AM
 *
 * @async
 * @param {*} name
 * @returns {unknown}
 */
async function getGender(name) {
  const base_api = "https://api.genderize.io";
  const queryUrl = `${base_api}/?name=${name}&country_id=ID`;
  const response = await fetch(queryUrl);
  const artistDetail = await response.json();
  return artistDetail;
}

/**
 * Description placeholder
 * @date 1/13/2024 - 2:58:26 AM
 *
 * @async
 * @param {*} name
 * @returns {*}
 */
async function setGender(name) {
    try {
        const data = await getGender(name);
        const resultGender = document.getElementById("result-gender");

        const probability = data.probability * 100;
        const gender = data.gender == "male" ? "Pria" : "Wanita";

        resultGender.textContent = `Halo ${name}, presentase kemungkinan anda seorang ${gender} adalah sebanyak ${probability}%`;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Description placeholder
 * @date 1/13/2024 - 2:58:26 AM
 *
 * @async
 * @param {*} event
 * @returns {*}
 */
async function handleInput(event) {
  if (event.code == "Enter" || event.keyCode == 13) {
    const query = event.target.value;
    const name = query.replace(/\s/g, "");
    await setGender(name);
  }
}
