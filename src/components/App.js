import React, { useState } from 'react';

const toursData = [
  // ... (Your tour data here)
];

const App = () => {
  const [tours, setTours] = useState(toursData);
  const [loading, setLoading] = useState(false);

  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const handleShowMore = (id) => {
    const updatedTours = tours.map((tour) =>
      tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
    );
    setTours(updatedTours);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main id="main">
      <h1 className="title">Tours</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : tours.length === 0 ? (
        <div>
          <p>No more tours</p>
          <button className="btn" onClick={refreshPage}>
            Refresh
          </button>
        </div>
      ) : (
        tours.map((tour) => (
          <div key={tour.id} className="single-tour">
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <p className="tour-info">
              {tour.showMore ? tour.info : `${tour.info.slice(0, 200)}...`}
              <button onClick={() => handleShowMore(tour.id)}>
                {tour.showMore ? 'See Less' : 'See More'}
              </button>
            </p>
            <p className="tour-price">Price: {tour.price}</p>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTour(tour.id)}
            >
              Delete Tour
            </button>
          </div>
        ))
      )}
    </main>
  );
};

export default App;
