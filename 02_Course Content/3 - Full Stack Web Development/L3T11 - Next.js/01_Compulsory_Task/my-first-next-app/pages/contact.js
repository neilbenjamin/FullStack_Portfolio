import Link from 'next/link';
import Layout from '../components/MyLayout';

const containerStyle = {
  textAlign: 'center', // Center align everything
};

const contactInfoStyle = {
  fontSize: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  borderRadius: '10px',
  marginTop: '20px',
};

export default () => (
  <Layout>
    <div style={containerStyle}>
      <h1>Contact</h1>
      <img
        src="/static/images/ITPic.jpg"
        alt="Neil Benjamin"
        style={imageStyle}
      />
      <div style={contactInfoStyle}>
        <p>Email: neilbenjaminmusic@gmail.com</p>
        <p>Contact: 074 175 9591</p>
      </div>
    </div>
  </Layout>
);
