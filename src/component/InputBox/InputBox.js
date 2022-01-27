import axios from "axios";
import { useState } from "react";

const InputBox = () => {
  const [predictedLanguage, setPredictedLanguage] = useState("");
  const URL = "https://la-identification.herokuapp.com/predict";
  // const URL ="http://127.0.0.1:5000/predict";

  const sendDetectLanguageRequest = (enteredText) => {


      let formData = new FormData();
      formData.append('text',JSON.stringify({ text: enteredText }));

      axios({
      method: 'POST',
      url: URL,
      data: formData
      }).then(response => {
      setPredictedLanguage(response.data["predicted"]);
      });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    sendDetectLanguageRequest(event.target.text.value);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Enter text for language detection
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
      <div className="text-center">
        <h3>Language: {predictedLanguage}</h3>
      </div>
    </div>
  );
};

export default InputBox;
