export default function initScroll() {
  const menuInterno = document.querySelectorAll("[data-menu='suave'] a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const scrollItem = document.querySelector(href);
    scrollItem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const top = scrollItem.offsetTop
    // console.log(href, top)
    // scroll({
    //   top: top,
    //   behavior: "smooth"
    // });
  }

  menuInterno.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
