import React from 'react'
import '../style/Home.css'
const Home = () => {
  return (
    <div className='homeContainer'>
        <div>
            <div>
            <div>
            <img src={require('../images/me 1.png')}  alt='Art-Hub Logo' className='homeImg' />

            <div className='newRelease'>
            <img src={require('../images/1a.png')}  alt='Art-Hub Logo' className='newReleaseImg' />
            <div>
            <h2>New Release</h2>
            <h3>Modern Society: The Sixties Attack</h3>
            <p>Descover a story about a young college lost his family in a car accident while he was texting and driving. So, he embarked on a journey to hack into every database in the world. In an attempt to end the influence of technology and social media.</p>
            <a href='https://a.co/d/e637AdR' target='blank'><h4>View on Amazon</h4></a>
            </div>
            </div>
            </div>

            <div>
                <h1>The Modern Society series</h1>
             </div>

            <div className='booksCoversContainer'>
             <div className='booksCoversConent'>
            <a href='https://a.co/d/2LWI32q' target='blank'>
            <img src={require('../images/Book Cover 5.png')}  alt='Art-Hub Logo' className='bookCoverImg' />
            </a>

            <img src={require('../images/Book Cover 1.png')}   alt='Art-Hub Logo'  className='bookCoverImg' />
            </div>
            </div>
            <h1>Short stories</h1>

            <div className='homeStories'>
                <div>
                <img src={require('../images/Story Cover 1.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />

                <img src={require('../images/Story Cover 2.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />

                <img src={require('../images/Story Cover 3.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />

                <img src={require('../images/Story Cover 4.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />

                <img src={require('../images/Story Cover 5.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />

                <img src={require('../images/Story Cover 6.png')}   alt='Art-Hub Logo'  className='homeStotiesImg' />
                </div>
            </div>
            </div>
         </div>
    </div>
  )
}

export default Home