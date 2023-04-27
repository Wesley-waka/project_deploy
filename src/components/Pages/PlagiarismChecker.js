import React, { useState } from "react";

function PlagiarismChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [plagiarismPercentage, setPlagiarismPercentage] = useState(0);
  const [plagiarismThreshold, setPlagiarismThreshold] = useState(0);
  const [identicalWords, setIdenticalWords] = useState([]);

  function handleText1Change(event) {
    setText1(event.target.value);
  }

  function handleText2Change(event) {
    setText2(event.target.value);
  }

  function handlePlagiarismThresholdChange(event) {
    setPlagiarismThreshold(Number(event.target.value));
  }

  function handleCheckPlagiarism() {
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);

    const identicalWords = words1.filter((word) => words2.includes(word));
    const plagiarismPercentage = Math.round(
      (identicalWords.length /
        (words1.length + words2.length - identicalWords.length)) *
        100
    );
    setPlagiarismPercentage(plagiarismPercentage);
    setIdenticalWords(identicalWords);
  }

  function displayIdenticalWords(identicalWords) {
    return identicalWords.join(" ");
  }

  function highlightIdenticalWords(text) {
    const words = text.split(/\s+/);
    return words.map((word) =>
      identicalWords.includes(word) ? (
        <span style={{ color: "red" }}>{word} </span>
      ) : (
        word + " "
      )
    );
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-bold pt-5">
        {" "}
        Plagiarism Checker
      </h1>

      <div className=" " style={{ marginLeft: "520px", paddingTop: "30px" }}>
        <div
         
          class="block max-w-sm p-6 bg-gray-400 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* <h1> Plagiarism Checker</h1> */}
          <div>
            <textarea
              placeholder="Enter text 1"
              value={text1}
              onChange={handleText1Change}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter text 2"
              value={text2}
              onChange={handleText2Change}
            />
          </div>
          {/* <div>
 <label htmlFor="plagiarismThreshold">Plagiarism threshold: {plagiarismThreshold}%</label>
 <input type="range" id="plagiarismThreshold" min="0" max="100" value={plagiarismThreshold} onChange={handlePlagiarismThresholdChange} />
</div> */}
          <div>
            <button
              type="submit"
              className="bg-orange-400 p-1 rounded-md"
              onClick={handleCheckPlagiarism}
            >
              Check Plagiarism
            </button>
          </div>
          {plagiarismPercentage > 0 && (
            <div>
              Plagiarism percentage: {plagiarismPercentage}%{" "}
              {plagiarismPercentage >= plagiarismThreshold
                ? "(plagiarized)"
                : "(not plagiarized)"}
            </div>
          )}
          {identicalWords.length > 0 && (
            <div>Identical words: {displayIdenticalWords(identicalWords)}</div>
          )}
          {identicalWords.length > 0 && (
            <div>Text 1: {highlightIdenticalWords(text1)}</div>
          )}
          {identicalWords.length > 0 && (
            <div>Text 2: {highlightIdenticalWords(text2)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlagiarismChecker;
