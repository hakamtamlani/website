import React from "react";
import './Styles/Navbar.css';

const Main = () => {
  const seemore = () => {
    document.write(
      `Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Repellendus, asperiores 
      sit modi corrupti magnam possimus officiis
       sapiente quos soluta similique, inventore
        voluptate accusantium sed unde dolorem ab 
        ullam. Perferendis, tempora.
    
        
        `
    )
  }
 
  return (
    <>
    <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5">
            {" "}
            <img src="mn lpt.jpg" alt="" width={"500px"} loop muted autoplay/>
          </div>
          <div className="col-md-6 col-sm-12 p-5">
            <h1>JAVASCRIPT</h1>
            <h3>ALL ABOUT JAVASCRIPT</h3>
            <p>JAVASCRIPT MOST POPULAR CLIENT SIDE  LANGUAGE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              veritatis eos sit, saepe culpa architecto eligendi laudantium odit
              similique pariatur vero adipisci perspiciatis maiores corporis
              blanditiis iure ullam officiis recusandae!
            </p>

            <button class="btn btn-primary"  onClick={seemore}>Get More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
