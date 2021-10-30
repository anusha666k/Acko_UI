import React from 'react';


function Inputdata() {
  return (
    <div>
    <div className="inpot-form">
    <div class="bg dark">
      <div class="input-cont dark">
        <input type="text" name="name" autocomplete="off" required />
        <label for="name" class="label-name">
          <span class="content-name">Enter your Bike Number</span>
        </label>
      </div>
    </div>
    <button className="insure-you" color="success">
      Insure You &#8594;
    </button>
  </div>
    </div>
  );
}

export default Inputdata;
