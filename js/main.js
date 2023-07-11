let countSection = document.querySelector(".counter");
let nums = document.querySelectorAll(".count-title h3");
let startedCount = false;

window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var navbar = document.getElementById("navbar");

  if (scrolled > 500) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY >= countSection.offsetTop - 500) {
    if (!startedCount) {
      nums.forEach((h3) => startCount(h3));
      startedCount = true;
    }
  }

  let section = document.querySelector(".about");
  let progSpans = document.querySelectorAll(".skills .skills-progress span");

  if (window.scrollY >= section.offsetTop - 370) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let currentCount = 0;
  let increment = Math.ceil(goal / 100);

  function updateCount() {
    currentCount += increment;
    el.textContent = currentCount;

    if (currentCount < goal) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = goal;
    }
  }

  updateCount();
}
