export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
  
    numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      const incremento = total / 100;
      let i = 0;
      const timer = setInterval(() => {
        i = Math.round(i + incremento);
        numero.innerText = i;
        if (i > total) {
          numero.innerHTML = total
          clearInterval(timer);
        }
      }, Math.random() * 25);
    });
  }
  function handleMutation(mutation){
    if(mutation[0].target.classList.contains("ativo")){
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".numeros")
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {attributes:true});
}