const API = "https://dota2-heroes.p.rapidapi.com/heroes/english";
const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c09d7ef81mshba7f69881157d2fp142ed7jsn5ae927340a4d',
		'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
	}
};

fetch('https://dota2-heroes.p.rapidapi.com/heroes/english', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

async function fecthData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const chords = await fecthData(API);

    let view = `
    ${chords.map( item =>`
    <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img style="width: 10rem;"  src="${item.Position1}" alt="img2" class="w-full" >
            </div>
            <h1><b>Chord:</b> ${item.Chord_Name} </h1>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"> </span>
            </h3>
            <p>${item.Chord_Type}</p>
            </div>
        </div>
    `
        ).slice(0, 10).join("")}
    `;
    content.innerHTML = view
  } catch (error) {
    console.log(error);
  }
})();
console.log(fecthData(API));