import React from 'react';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="mainSection">
        <div className="heroSection">
          <img src={require('../images/me 1a.png')} alt="Art-Hub Logo" className="homeImg" />

          <div className="newRelease">
            <img src={require('../images/1a.png')} alt="New Release" className="newReleaseImg" />
            <div className="newReleaseInfo">
              <h2>New Release</h2>
              <h3>Modern Society: The Sixties Attack</h3>
              <p>
                Discover a story about a young college student who lost his family in a car accident
                while texting and driving. He embarks on a journey to hack into every database in
                the world to end the influence of technology and social media.
              </p>
              <a href="https://a.co/d/e637AdR" target="blank" className="amazonLink">
                <h4>View on Amazon</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="seriesSection">
          <h1>The Modern Society Series</h1>
        </div>

        <div className="booksCoversContainer">
          <div className="booksCoversContent">
            <a href="https://a.co/d/2LWI32q" target="blank">
              <img src={require('../images/Book Cover 5.png')} alt="Book Cover 5" className="bookCoverImg" />
            </a>
            <a href="https://a.co/d/fP1z3kS" target="blank">
              <img src={require('../images/RiseofRobots.png')} alt="Rise of Robots" className="bookCoverImg" />
            </a>
          </div>
        </div>

        <h1>Short Stories</h1>

        <div className="homeStories">
          <div className="storiesGrid">
            <img src={require('../images/Parade In The Village.png')} alt="Parade In The Village" className="homeStoriesImg" />
            <img src={require('../images/The Living And The Dead.png')} alt="The Living And The Dead" className="homeStoriesImg" />
            <img src={require('../images/The Middle Child.png')} alt="The Middle Child" className="homeStoriesImg" />
            <img src={require('../images/Yoked of Love.png')} alt="Yoked of Love" className="homeStoriesImg" />
            <img src={require('../images/Past of A Man.png')} alt="Past of A Man" className="homeStoriesImg" />
            <img src={require('../images/The Cabin.png')} alt="The Cabin" className="homeStoriesImg" />
            <img src={require('../images/Mark Williams.png')} alt="Mark Williams" className="homeStoriesImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
