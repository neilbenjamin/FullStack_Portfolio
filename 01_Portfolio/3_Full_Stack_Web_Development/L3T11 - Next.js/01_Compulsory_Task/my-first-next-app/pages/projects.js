import Link from 'next/link';
import Layout from '../components/MyLayout';

const projectLinks = [
  { name: 'Digital Blend', link: 'https://github.com/neilbenjamin/digital_blend' },
  { name: 'Compulsory Task 01', link: 'https://github.com/neilbenjamin/Compulsory_Task_01' },
  { name: 'React Hello', link: 'https://github.com/neilbenjamin/react-hello' },
  { name: 'Octohoodie App', link: 'https://github.com/neilbenjamin/octohoodie-app' },
  { name: 'Neil Benjamin CV', link: 'https://github.com/neilbenjamin/neilbenjamincv' },
  { name: 'Octohoodie', link: 'https://github.com/neilbenjamin/Octohoodie' },
  { name: 'To-Do App', link: 'https://github.com/neilbenjamin/to-do-app' },
  { name: 'Nationality Predictor', link: 'https://github.com/neilbenjamin/nationalitypredictor' },
  { name: 'Hangman', link: 'https://github.com/neilbenjamin/hangman' },
  { name: 'Backend', link: 'https://github.com/neilbenjamin/backend' },
];

const wordpressLinks = [
  { name: 'Gooiensteek', link: 'https://www.gooiensteek.com/' },
  { name: 'Clinton Gahwiler', link: 'https://www.clintongahwiler.com/' },
  { name: 'Hamilton Gallery', link: 'https://www.hamiltongallery.co.za/' },
  { name: 'Black Sheep Music', link: 'https://www.blacksheepmusic.co.za/' },
  { name: 'Cape DJ Co', link: 'https://www.capedjco.co.za/' },
  { name: 'Octohoodie', link: 'https://www.octohoodie.com/' },
  { name: 'Complete Guitar Guide', link: 'https://completeguitarguide.com/' },
];

const linkStyle = {
  display: 'block',
  marginBottom: '10px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'center',
};

const sectionStyle = {
  margin: '0 20px',
};

const imageStyle = {
  maxWidth: '50%',
  marginTop: '20px',
  borderRadius: '10px',
};

export default () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h1>GitHub Portfolio</h1>
          <img
            src="/static/images/GitHub.jpg"
            alt="Neil Benjamin"
            style={imageStyle}
          />
          {projectLinks.map((project, index) => (
            <p key={index} style={linkStyle}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </p>
          ))}
        </div>

        <div style={sectionStyle}>
          <h1>WordPress Sites</h1>
          <img
            src="/static/images/WordPress.jpg"
            alt="Neil Benjamin"
            style={imageStyle}
          />
          {wordpressLinks.map((site, index) => (
            <p key={index} style={linkStyle}>
              <a href={site.link} target="_blank" rel="noopener noreferrer">
                {site.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
};
