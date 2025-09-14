document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  //Randomize animation for page title
    const attentionSeekers = [
      "animate__bounce", "animate__flash", "animate__pulse",
      "animate__rubberBand", "animate__shakeX", "animate__shakeY",
      "animate__headShake", "animate__swing", "animate__tada",
      "animate__wobble", "animate__jello", "animate__heartBeat"
    ];
    const title = document.getElementById("title");
    const randomAnim = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
    title.classList.add("animate__animated", randomAnim);

    //Toast message
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = "You must select at least one color for a proper happy birthday";
      toast.className = message;
      setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    document.getElementById("submitBtn").addEventListener("click", () => {
      const balloons = document.querySelectorAll('input[name="balloon"]:checked');
      if (balloons.length === 0) {
        showToast("Please select at least one balloon!");
      } else {
        showToast("Balloons submitted successfully!");
      }
    });

    //Uncheck all boxes
    const toggleBtn = document.getElementById("toggleAll");
    toggleBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll('input[name="balloon"]');
      const allChecked = [checkboxes].every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !allChecked);
    });

    //Hover effect
    const labels = document.querySelectorAll("label");
    labels.forEach(label => {
      const color = label.textContent.split(" ")[0].toLowerCase();
      label.addEventListener("mouseover", () => title.style.color = color);
      label.addEventListener("mouseout", () => title.style.color = "");
    });
});
