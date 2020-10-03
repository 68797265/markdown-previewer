// Markdown previewer interprets carriage returns and renders them as <br> (line break) elements
marked.setOptions({
  breaks: true,
});

// Text to markdown
function newM() {
  let editorV = document.getElementById("editor").value;
  let markedE = marked(editorV);
  preview.innerHTML = markedE;
}

// Set initial text
function initialT() {
  let initialT = `\

  # Header 1
  ## Header 2
  ---
[Markdown documentation](https://marked.js.org/).

\`npm install -g marked\`


\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

> Markdown is a lightweight markup language with plain-text-formatting syntax.

#### List

- list item one
- list item two
- list item three

![Markdown](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

**Markdown**
`;

  editor.value = initialT;
  preview.innerHTML = marked(initialT);
}
