async function publishToGitHub(repoName, htmlContent) {
  const token = "your_personal_access_token";
  const owner = "Farzanehsedarati610";
  const repoUrl = `https://api.github.com/repos/${owner}/${repoName}/contents/index.html`;

  // First create the repo if it doesn’t exist
  await fetch(`https://api.github.com/user/repos`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: repoName,
      auto_init: true
    })
  });

  // Then publish the page
  await fetch(repoUrl, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Initial symbolic deploy",
      content: btoa(unescape(encodeURIComponent(htmlContent)))
    })
  });
}

