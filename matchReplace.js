function matchReplace(content) {
  const patterns = {
    "{{TITLE}}" : "Global Symbolic Tool",
    "{{VERSION}}" : "v1.0"
  };
  for (const [find, replace] of Object.entries(patterns)) {
    content = content.replaceAll(find, replace);
  }
  return content;
}

