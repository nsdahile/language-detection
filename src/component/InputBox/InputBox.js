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
    <>
      <div>
        <h1>Language: {predictedLanguage}</h1>
      </div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="text">Enter text</label>
        <textarea id="text" name="text" rows="4" cols="50"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputBox;
