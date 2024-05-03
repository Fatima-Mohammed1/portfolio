if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 300);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

const observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show0");
    } else {
      entry.target.classList.remove("show0");
    }
  });
});

const hidden0Elements = document.querySelectorAll(".hidden0");
hidden0Elements.forEach((element) => observer0.observe(element));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    } else {
      entry.target.classList.remove("show1");
    }
  });
});

const hidden1Elements = document.querySelectorAll(".hidden1");
hidden1Elements.forEach((element) => observer1.observe(element));

const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("view");
    } else {
      entry.target.classList.remove("view");
    }
  });
});

const HiddenElements = document.querySelectorAll(".hide");
HiddenElements.forEach((element) => Observer.observe(element));

const ObserveR = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const HiddenElement = document.querySelectorAll(".hidden2");
HiddenElement.forEach((element) => ObserveR.observe(element));

const picture = document.querySelector(".picture");
const circle = document.querySelector(".circle");

picture.addEventListener("mousemove", function (e) {
  const rect = picture.getBoundingClientRect();
  const x = e.clientX - rect.left - circle.offsetWidth / 2;
  const y = e.clientY - rect.top - circle.offsetHeight / 2;

  circle.style.transform = `translate(${x}px, ${y}px)`;
});
