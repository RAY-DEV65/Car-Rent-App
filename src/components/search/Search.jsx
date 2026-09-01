import "./Search.css";

const Search = () => {
  return <div className="car-search">
    <div className="search-container">
       <div className="search-head">
         <div className="search-text">
            <h2>Find Your Car</h2>
        <p>Choose your location and dates to find the perfect car.</p>

         </div>
        <button className="live-btn"> ◽</button>

       </div>
        <form className="search-form">

            <div className="form-group">
                <label>Pick-up location</label>
                <select name="pickupLocation"  required>
                    <option value="">Select Location</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Kano">Kano</option>
                </select>
            </div>
            <div className="form-group">
                <label>Pick-up Date</label>
                <input type="date" name="pickupDate" required/>
            </div>
            <div className="form-group">
                <label>Pick-up Time</label>
                <input type="time" name="pickupTime" required/>
            </div>
            <div className="form-group">
                <label>Drop-off Date</label>
                <input type="date" name="dropoffDate" required/>
            </div>

            <button type="submit" className="search-btn">Search Cars</button>
        </form>
    </div>

  </div>;
};

export default Search;
