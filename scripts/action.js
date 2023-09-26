"use strict";
const shareButtonToggler = document.getElementById("share-tooltip-toggle");
const shareTooltip = document.getElementsByClassName("share-tooltip")[0];

function toggleButtonStyle() {
  if (shareButtonToggler.classList.contains("active")) {
    shareButtonToggler.classList.remove("active");
  } else {
    shareButtonToggler.classList.add("active");
  }
}

shareButtonToggler.onclick = () => {
  shareTooltip.style.display =
    shareTooltip.style.display == "flex" ? "none" : "flex";
  toggleButtonStyle();
};
