import { Link } from 'react-router-dom';

const element = () => {
  return (
    <>
      <h1>Currect Page: Page 2</h1>
      <hr />
      <img src='./img3.png' alt='3rd image' />
      <img src='./img1.png' alt='1st image' />
      <img src='./img2.png' alt='2nd image' />
      <h2>Move Page</h2>
      <div>
        prev page: <Link to='/page1'>Page 1</Link>
        <br />
        next page: <Link to='/'>Home</Link>
      </div>
    </>
  );
}

export default element;