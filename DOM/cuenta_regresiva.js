const d = document;

export default function countdown(id, limitDate, finalMesage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();
  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours,
      minutes,
      seconds;
    $countdown.innerHTML = `<h2> Faltan: "${days}" Dias "${hours}" Horas "${hours}" "${minutes}" Minutos "${seconds}" Segundos </h2>`;
    // console.log(countdownDate, now, limitTime);
  }, 1000);
}
