const contactForm = document.querySelector("#contact__form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".contact__form__name").value;
  const email = document.querySelector(".contact__form__email").value;
  const subject = document.querySelector(".contact__form__subject").value;
  const message = document.querySelector(".contact__form__message").value;
  const data = {
    name,
    email,
    message,
    subject,
  };
  // send this data to the gmail

  Email.send({
    SecureToken: "abe1bad1-b1af-49ec-b85b-6e657722cc1d",
    To: "masihur96@gamail.com",
    From: email,
    Subject: subject,
    Body: message,
  }).then(
    (message) => console.log(message),
    (error) => console.log(error)
  );

  //   fetch("https://portfolio-contact-form.herokuapp.com/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert("Message sent successfully");
  //         document.querySelector(".contact__form__name").value = "";
  //         document.querySelector(".contact__form__email").value = "";
  //         document.querySelector(".contact__form__subject").value = "";
  //         document.querySelector(".contact__form__message").value = "";
  //       } else {
  //         alert("Message not sent");
  //       }
  //     })
  //     .catch((err) => {
  //       alert("Message not sent");
  //     });

  console.log(data);
});
