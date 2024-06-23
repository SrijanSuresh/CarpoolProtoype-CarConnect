import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all things awesome.</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>About Us</h2>
          <p>We are a team of passionate developers and designers dedicated to creating amazing web experiences.</p>
        </section>
        <section className="home-section">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
            <li>SEO Optimization</li>
          </ul>
        </section>
        <section className="home-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us at <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
