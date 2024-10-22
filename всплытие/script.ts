const button = document.querySelector(".btn") as HTMLButtonElement;
// const button: HTMLButtonElement | null = document.querySelector(".btn");
button?.addEventListener("click", () => {
  // const boxes: HTMLElement[] = Array.from(document.querySelectorAll(".box"));

  // const boxes: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
  //   "box"
  // ) as HTMLCollectionOf<HTMLElement>;
  //error ошибка

  const boxes = Array.from(document.querySelectorAll(".box") as NodeListOf<HTMLElement>);
  //   const boxes: NodeListOf<HTMLElement> = document.querySelectorAll(".box");
  let delay: number = 0;

  boxes.reverse();

  boxes.forEach((box: HTMLElement) => {
    setTimeout(() => {
      box.classList.add("active");

      // Удаляем подсветку через некоторое время
      setTimeout(() => {
        box.classList.remove("active");
      }, 100);
    }, delay);

    delay += 300; // Задержка перед подсветкой следующего элемента
  });
});
