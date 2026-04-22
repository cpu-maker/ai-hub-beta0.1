async function send() {
  const input = document.getElementById("input").value;
  const model = document.getElementById("model").value;

  addMessage("You", input);

  let response = "";

  if (model === "gemini") {
    response = await callGemini(input);
  }

  if (model === "groq") {
    response = await callGroq(input);
  }

  if (model === "openai") {
    response = await callOpenAI(input);
  }

  if (model === "claude") {
    response = await callClaude(input);
  }

  addMessage(model, response);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  chat.innerHTML += `<p><b>${sender}:</b> ${text}</p>`;
}
