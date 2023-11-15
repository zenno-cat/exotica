const form = () => {
  const f = document.querySelector(".form");

  const sendData = async (e) => {
    e.preventDefault();

    const nameInput = f.querySelector('[name="name"]'),
      contactInput = f.querySelector('[name="contact"]'),
      ageInput = f.querySelector('[name="age"]'),
      fileInput = f.querySelector('[name="file"]');

    const name = nameInput.value,
      contact = contactInput.value,
      age = ageInput.value;
    // file = fileInput.files[0];

    const data = {
      name: null,
      contact: null,
      age: null,
      file: null,
    };

    const errors = [];

    data.name = name;
    data.age = age;

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

    try {
      const loader = document.querySelector(".loader");
      const body = document.body;
      loader.classList.add("active");
      body.style.overflow = "hidden";

      const response = await fetch(
        "https://webhook.site/89b04d04-cd87-4af3-936e-5ff3fb7f2346",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
