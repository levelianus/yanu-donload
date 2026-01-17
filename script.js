function download() {
  const url = document.getElementById("url").value;

  if (!url) {
    alert("Paste a link");
    return;
  }

  window.open(url, "_blank");
}
