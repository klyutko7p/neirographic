document.addEventListener("DOMContentLoaded", function () {
  var accCtrls = document.querySelectorAll(".acc_ctrl");

  accCtrls.forEach(function (ctrl) {
    ctrl.addEventListener("click", function (e) {
      e.preventDefault();
      var isActive = this.classList.contains("active");
      var content = this.nextElementSibling;

      if (isActive) {
        this.classList.remove("active");
        slideUp(content, 300);
      } else {
        this.classList.add("active");
        slideDown(content, 300);
      }
    });
  });
});

function slideUp(element, duration) {
  var targetHeight = 0;
  var originalHeight = element.scrollHeight;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var progress = timestamp - startTime;
    var progressRatio = Math.min(progress / duration, 1);
    var currentHeight = originalHeight - progressRatio * originalHeight;
    element.style.height = currentHeight + "px";

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = "none";
      element.style.height = "";
    }
  }

  requestAnimationFrame(animate);
}

function slideDown(element, duration) {
  element.style.display = "block";
  element.style.height = "0";

  var targetHeight = element.scrollHeight;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var progress = timestamp - startTime;
    var progressRatio = Math.min(progress / duration, 1);
    var currentHeight = progressRatio * targetHeight;
    element.style.height = currentHeight + "px";

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.height = "";
    }
  }

  requestAnimationFrame(animate);
}
