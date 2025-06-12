/* global emailjs, confetti, document */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const spinner = document.getElementById('spinner');
  const alertBox = document.getElementById("formAlert");

  // Initialize EmailJS
  emailjs.init("_zxnoWKTIeNZSTuQJ");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        showAlert("Please fill in all fields.", "error");
        return;
      }

      // Loading UI
      submitBtn.disabled = true;
      btnText.textContent = "Sending...";
      spinner.classList.remove("hidden");
      alertBox.classList.add("hidden");

      // Send the form using EmailJS
      emailjs.send("service_639ck52", "template_emluw08", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
        .then(() => {
          showAlert("Message sent successfully!", "success");
          contactForm.reset();
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          showAlert("Failed to send message. Please try again later.", "error");
        })
        .finally(() => {
          submitBtn.disabled = false;
          btnText.textContent = "Send Message";
          spinner.classList.add("hidden");
        });
    });
  }

  // Alert display helper
  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");

    if (type === "success") {
      alertBox.className = "p-4 mb-4 rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
    } else {
      alertBox.className = "p-4 mb-4 rounded-lg bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200";
    }

    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 5000);
  }
});
