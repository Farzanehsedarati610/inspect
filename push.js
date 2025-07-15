async function pushToGitHub() {
  const content = btoa(window.editor.state.doc.toString())
  const repo = symbolicMap[targetEntity].repo
  const path = "index.html"
  const token = symbolicMap[targetEntity].token
  
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Symbolic push from browser editor",
      content: content,
      sha: symbolicMap[targetEntity].sha  // optional: GET before PUT
    })
  })
  console.log(await res.json())
}

