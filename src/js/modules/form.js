const form = () => {
  const f = document.querySelector(".form");

  const photoInputs = document.querySelectorAll('[name="file"]');
  if (photoInputs) {
    photoInputs.forEach((photoInput, index) => {
      let txt = "";
      photoInput.addEventListener("change", () => {
        if ("files" in photoInput) {
          if (photoInput.files.length == 0) {
            txt = "Выберите один или несколько файлов";
          } else {
            txt = photoInput.files[photoInput.files.length - 1].name + "<br>";
          }
        } else {
          if (photoInput.value == "") {
            txt += "Выберите один или несколько файлов";
          } else {
            txt += "Расширение файла не поддерживается вашим браузером!";
            txt += "Путь выбранного файла: " + photoInput.value;
          }
        }
        document.querySelectorAll(".form__file-button")[index].innerHTML = txt;
      });
    });
  }

  const sendData = async (e) => {
    e.preventDefault();

    const contactInput = f.querySelector('[name="contact"]');

    const contact = contactInput.value;

    const errors = [];

    if (!contact) {
      errors.push("Contact is required");
      contactInput.classList.add("input--error");

      const errorText = document.createElement("p");
      errorText.classList.add("error-text");
      errorText.innerText = "Важно заполнить это поле";
      contactInput.parentElement.appendChild(errorText);
    } else {
      contactInput.classList.remove("input--error");
      const parentElement = contactInput.parentElement;
      if (parentElement.querySelector(".error-text")) {
        parentElement.querySelector(".error-text").remove();
      }
      data.contact = contact;
    }

    if (errors.length) {
      console.log(errors);
      return;
    }

    const formData = new FormData();

    try {
      const loader = document.querySelector(".loader");
      const body = document.body;
      loader.classList.add("active");
      body.style.overflow = "hidden";

      const response = await fetch(
        "https://webhook.site/89b04d04-cd87-4af3-936e-5ff3fb7f2346",
        {
          method: "POST",
          body: formData,
        }
      ).finally(() => {
        const loader = document.querySelector(".loader");
        const body = document.body;
        loader.classList.remove("active");
        body.style.overflow = "auto";
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      const loader = document.querySelector(".loader");
      const body = document.body;
      loader.classList.remove("active");
      body.style.overflow = "auto";

      console.error("Error fetching data:", error);
    }
  };

  f.addEventListener("submit", sendData);
};

export default form;
