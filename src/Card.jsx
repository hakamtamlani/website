import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

const Card = () => {
  const [apiData, setApiData] = useState(null);

  const fetchApiData = async () => {
    try {
      const API = "http://hn.algolia.com/api/v1/items/123"; // Replace 123 with the desired ID
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        {/* ... other content ... */}
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5">
            <h1>JAVASCRIPT</h1>

            <h3>ALL ABOUT JAVASCRIPT</h3>
            <p>JAVASCRIPT MOST POPULAR CLIENT SIDE SCRIPTING LANGUAGE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              veritatis eos sit, saepe culpa architecto eligendi laudantium odit
              similique pariatur vero adipisci perspiciatis maiores corporis
              blanditiis iure ullam officiis recusandae!
            </p>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Get More"
          onClick={fetchApiData} 
        >
          Details
        </button>
      </div>
    
    <div className="col-md-6 col-sm-12 p-5 ">
      {" "}
      <img src="mnnlp.png" alt="" width={"70%"} />
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" class="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" class="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" class="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary ml-5">
            More
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      {apiData && (
        <div className="container">
          {/* Display the API data here */}
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
      <Main />
       <hr style={{ marginTop: "2rem" }} /> 
      <Footer />

    </>
  );
};
export default Card;


