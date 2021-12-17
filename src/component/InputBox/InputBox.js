import { useState } from "react";

const InputBox = () => {
  const [predictedLanguage, setPredictedLanguage] = useState("");
  const URL = "https://mywebsite.com/endpoint/";

  const sendDetectLanguageRequest = (enteredText) => {
    // fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text: enteredText,
    //   }),
    // })
    //   .then((res) => {
    //     console.log(res);
    setPredictedLanguage("EN");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    sendDetectLanguageRequest(event.target.text.value);
  };

  return (
    <div className='container'>
      <div>
        <h3>Language: {predictedLanguage}</h3>
      </div>

      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Email address
          </label>
          <textarea
            id="text"
            className="form-control"
            name="text"
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Detect Language
        </button>
      </form>
    </div>
  );
};

export default InputBox;
