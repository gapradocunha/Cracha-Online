const linkSocialMedia = {
  github: "gapradocunha",
  youtube: "Gabriel_Prado_da_Cunha",
  facebook: "gabriel.pradodacunha.98",
  instagram: "gapradocunha",
  twitter: "gapradocunha",
  linkedin: "gapradocunha",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
