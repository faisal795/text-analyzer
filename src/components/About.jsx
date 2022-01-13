import React from "react";

function About() {
  const MyStyle = {
    backgroundColor: "#01033be8",
    color: "#fff",
  };

  return (
    <>
      <div className="container p-3 mt-4" style={MyStyle}>
        <h1>About Us</h1>
        <div className="accordion p-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={MyStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                A SIMPLE AND FREE TEXT ANALYZER
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={MyStyle}>
                <strong>A simple and free analyze your text.</strong> Text
                Analyzer and TextUtils gives you to analyze your text quickly
                and efficiently. Be it's CHARACTERS COUNT, WORDS COUNT,
                SENTENCES COUNT, PARAGRAPH COUNT, MINUTS READ COUNT and
                CHARACTERS WITHOUT SPACE COUNT.
                <code> As a lecturer,</code> you can use this tool to ensure
                your students’ assignments are the correct length. overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={MyStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                OTHER USES : FREE TO USE
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={MyStyle}>
                <strong>
                  Text Analyzer and TextUtils services you can find on the Web.
                </strong>
                The word count is the number of words in a document or passage
                of text. Word counting may be needed when a text is required to
                stay within certain numbers of words. This may particularly be
                the case in academia, legal proceedings, journalism and
                advertising.
                <code> word count tool</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={MyStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                ONLINE TEXT ANALYZER TOOL
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={MyStyle}>
                <strong>Online Text Analyzer Tool.</strong> Sometimes we all
                need to analyze whatever we have written, especially if you work
                as a writer. You need to check and count characters, spaces,
                words, sentences, and other things in your text to fulfill all
                guidelines.
                <code>Well, with our Text Analyzer tool</code>, this has never
                been easier. All you need to do is paste your text into the
                toolbox, and it will analyze the text for you.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                style={MyStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                BROWSER COMPATIBLE TEXT-UTILS, TEXT-ANALYZER
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={MyStyle}>
                <strong>
                  cross-browser compatible extension Text Analyzer Tool.
                </strong>
                Count me up is a cross-browser compatible extension, which aims
                to provide an intuitive and clean interface for word and
                character counting. This is the lite version which provides only
                the quick view functionality.
                <code> respective web-stores Text Analyzer tool</code>, If you
                want the full version you can find it here:
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
