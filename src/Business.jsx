import React from "react";  


function Business() {
  return (
    <div className="BusinessContainer">
        <img className='BusinessImg'src="src/assets/Default Business Logo.jpeg" alt="Business Logo" />
        <h2 className="BusinessName">Business Name</h2>
        <div>
            <div className="InfoRow">
                <span className="Address">1234 Business St.</span>
                <span className="Category">ITALIAN</span>
            </div>
            <div className="InfoRow">
                <span className="City">Bordertown</span>
                <span className="Rating">4.5 stars</span>

            </div>
            <div className="InfoRow">
                <span className="StateAndZip">NY 10101</span>
                <span className="ReviewCount">100 Reviews</span>

            </div>
        </div>
    </div>
  );
}

export default Business;