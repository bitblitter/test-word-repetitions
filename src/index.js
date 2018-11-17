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

    var wordListHTML = inputText;
    words.forEach(word => {
      var count = repeatedWords[word];
      var weight = count / maxRepetitions;
      var fontWeight = weight * 0.4 + 1;
      var wordRegEx = new RegExp(`\\b${word}\\b`, "gi");
      var wordReplacement = `<span class="rpttext" 
          title="'${word}': ${count} repetitions." 
          style="font-weight: ${fontWeight}em" ><span 
          class="rptweight" style="opacity: ${weight}"
          >${word}</span>${word}<span class="rptcount">${count}</span></span>`;
      wordListHTML = wordListHTML.replace(wordRegEx, wordReplacement);
    });

    output.innerHTML = `<quote>${wordListHTML}</quote>`;
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
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
});
