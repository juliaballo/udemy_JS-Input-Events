const input = document.getElementById("username");
const header = document.getElementsByTagName("H1")[0];
input.addEventListener("input", () => {
  if (input.value === "") {
    header.innerHTML = "Enter Your Username";
    return;
  }
  header.innerHTML = `Welcome, ${input.value}`;
});