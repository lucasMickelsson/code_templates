function copyToClipboard() {
    const link = "https://hinge.co/mission/#how-we-do-things";
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }