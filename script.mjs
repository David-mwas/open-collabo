import data from "./names.mjs";
const dataDiv = document.querySelector(".data");

window.addEventListener("load", openCollabo);

function openCollabo() {
  let teamACount = 0;
  let teamBCount = 0;

  // Count team members
  data.forEach((item) => {
    const teamNameLower = item.teamName.toLowerCase();
    if (teamNameLower === "team a" || teamNameLower === "a") {
      teamACount++;
    } else if (teamNameLower === "team b" || teamNameLower === "b") {
      teamBCount++;
    }
  });

  // Create a container for the badges
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("badge-container");

  // Create badges for the counts
  const badgeA = document.createElement("span");
  const badgeB = document.createElement("span");

  badgeA.classList.add("badge", "badge-a");
  badgeA.innerText = `Team A: ${teamACount}`;
  badgeB.classList.add("badge", "badge-b");
  badgeB.innerText = `Team B: ${teamBCount}`;

  // Append badges to badge container
  badgeContainer.appendChild(badgeA);
  badgeContainer.appendChild(badgeB);

  // Append the badge container below the h1
  const header = document.querySelector("h1");
  header.after(badgeContainer);

  // Create team cards
  data.map((item) => {
    let box = document.createElement("div");
    box.classList.add("box");

    const teamNameLower = item.teamName.toLowerCase();
    if (teamNameLower === "team a" || teamNameLower === "a") {
      box.classList.add("team-a");
    } else if (teamNameLower === "team b" || teamNameLower === "b") {
      box.classList.add("team-b");
    }

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
    });
    box.appendChild(skilldiv);

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
