export default function calculator() {
  try {
    const daysWrap = document.querySelector("[data-id='days']"),
      hoursWrap = document.querySelector("[data-id='hours']"),
      summWrap = document.querySelector(".summ");

    let currentDayValue = 4;
    let currentHoursValue = 6000;

    const activeDaysItem = daysWrap.querySelector(
      `[data-value="${currentDayValue}"]`
    );
    const activeHoursItem = hoursWrap.querySelector(
      `[data-value="${currentHoursValue}"]`
    );

    addActive(activeDaysItem, daysWrap, "days");
    addActive(activeHoursItem, hoursWrap, "hours");
    multiply(currentDayValue, currentHoursValue);

    daysWrap.addEventListener("click", (e) => {
      const target = e.target;

      addActive(target, daysWrap, "days");
      multiply(currentDayValue, currentHoursValue);
    });

    hoursWrap.addEventListener("click", (e) => {
      const target = e.target;

      addActive(target, hoursWrap, "hours");
      multiply(currentDayValue, currentHoursValue);
    });

    function addActive(target, elementsContainer, type) {
      if (target.classList.contains("calc__option")) {
        if (type === "days") {
          currentDayValue = +target.getAttribute("data-value");
        } else {
          currentHoursValue = +target.getAttribute("data-value");
        }

        removeActive(elementsContainer.childNodes);
        target.classList.add("active");
      }
    }

    function removeActive(row) {
      row.forEach((element) => {
        if (element.tagName === "BUTTON") {
          element.classList.remove("active");
        }
      });
    }

    function multiply(a, b, c = 4) {
      let result = a * b * c;
      result = result.toLocaleString("ru-RU");
      summWrap.textContent = result + " ₽";
    }
  } catch (err) {
    console.log(err);
  }
}
