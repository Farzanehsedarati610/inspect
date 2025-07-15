import { EditorView, basicSetup } from "codemirror"
import { html } from "@codemirror/lang-html"

window.editor = new EditorView({
  doc: "<!-- Start editing HTML here -->",
  extensions: [basicSetup, html()],
  parent: document.getElementById("editor")
})

