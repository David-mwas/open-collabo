import data from "./names.mjs";
const dataDiv = document.querySelector(".data");

window.addEventListener("load", openCollabo());
setTimeout(() => {
    // openCollabo();
  window.location.reload();
}, 7000);
function openCollabo() {
  console.log(data);
  data.map((item, index) => {
    let box = document.createElement("div");
    box.classList.add("box");

    let teamname = document.createElement("h2");
    teamname.innerHTML = `${item.teamName}`;
    box.appendChild(teamname);

    let fullname = document.createElement("h4");
    fullname.innerHTML = `${item.firstname} ${item.lastname}`;
    box.appendChild(fullname);

    let email = document.createElement("p");
    email.innerHTML = `${item.email}`;
    box.appendChild(email);

    let role = document.createElement("p");
    role.innerHTML = `${item.role}`;
    box.appendChild(role);

    const skilldiv = document.createElement("div");
    skilldiv.classList.add("skilldiv");
    item.skills.map((skillitem) => {
      let skill = document.createElement("span");
      skill.classList.add("skill");
      skill.innerHTML = skillitem;
      skilldiv.appendChild(skill);
      box.appendChild(skilldiv);
    });

    const socialdiv = document.createElement("div");
    skilldiv.classList.add("socialdiv");

    let social = document.createElement("p");
    social.classList.add("social");
    social.innerHTML = `Github @${item.socials[0].git}`;
    socialdiv.appendChild(social);
    box.appendChild(socialdiv);

    let social2 = document.createElement("p");
    social2.classList.add("social");
    social2.innerHTML = `X @${item.socials[1].twitter}`;
    socialdiv.appendChild(social2);
    box.appendChild(socialdiv);

    dataDiv.appendChild(box);
  });
}
