import countRepeatedWords from "./countRepeatedWords";
import "./index.css";

var appElement = document.querySelector("#app");

var app = ({ element, document, text = "" }) => {
  var handleInput = e => {
    var inputText = e.target.value;
    var repeatedWords = countRepeatedWords(inputText);

    var words = Object.keys(repeatedWords).filter(word => {
      return repeatedWords[word] > 1;
    });

    var maxRepetitions = Math.max.apply(this, Object.values(repeatedWords));

    var wordListHTML = "";
    words
      .sort((a, b) => {
        if (repeatedWords[a] > repeatedWords[b]) return -1;
        if (repeatedWords[a] < repeatedWords[b]) return 1;
        return 0;
      })
      .forEach(word => {
        var count = repeatedWords[word];
        var width = (count / maxRepetitions) * 100;

        wordListHTML += `<div class="graph-item">
            <span class="label">${word}</span>
            <span class="value" style="width: ${width}%">${count}</span>
        </div>`;
      });

    output.innerHTML = `<div class="graph">${wordListHTML}</div>`;
  };
  var form = document.createElement("form");

  var label = document.createElement("label");
  label.textContent =
    "Please input some text to see which words are repeated in it.";

  var input = document.createElement("textarea");
  input.rows = 4;
  input.oninput = handleInput;
  input.value = text;

  var output = document.createElement("output");

  form.className = "test-form";
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(output);
  element.appendChild(form);
  handleInput({ target: input });
};

app({
  element: appElement,
  document: document,
  text:
    "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques."
});
