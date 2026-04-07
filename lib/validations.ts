export function validateUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    console.error("Invalid URL", error);
    return false;
  }
}

export function validateAlias(alias: string) {
  if (alias.length < 3) {
    console.error("Alias is too short");
    return false;
  }
  if (alias.includes(" ")) {
    console.error("Alias cannot contain spaces");
    return false;
  }
  if (alias.includes(".")) {
    console.error("Alias cannot contain dots");
    return false;
  }
  if (alias.includes("/")) {
    console.error("Alias cannot contain slashes");
    return false;
  }
  if (alias.includes(":")) {
    console.error("Alias cannot contain colons");
    return false;
  }
  if (alias.includes(";")) {
    console.error("Alias cannot contain semicolons");
    return false;
  }
  if (alias.includes("=")) {
    console.error("Alias cannot contain equals");
    return false;
  }
  if (alias.includes("?")) {
    console.error("Alias cannot contain question marks");
    return false;
  }
  if (alias.includes("&")) {
    console.error("Alias cannot contain ampersands");
    return false;
  }
  if (alias.includes("*")) {
    console.error("Alias cannot contain asterisks");
    return false;
  }
  if (alias.includes("+")) {
    console.error("Alias cannot contain plus signs");
    return false;
  }
  if (alias.includes("|")) {
    console.error("Alias cannot contain pipes");
    return false;
  }
  if (alias.includes("\\")) {
    console.error("Alias cannot contain backslashes");
    return false;
  }
  if (alias.includes("<")) {
    console.error("Alias cannot contain less than signs");
    return false;
  }
  if (alias.includes(">")) {
    console.error("Alias cannot contain greater than signs");
    return false;
  }
  if (alias.includes("|")) {
    console.error("Alias cannot contain pipes");
    return false;
  }
  if (alias.includes("\\")) {
    console.error("Alias cannot contain backslashes");
    return false;
  }
  if (alias.includes(" ")) {
    console.error("Alias cannot contain spaces");
    return false;
  }
  if (alias.includes(".")) {
    console.error("Alias cannot contain dots");
    return false;
  }
  return true;
}
