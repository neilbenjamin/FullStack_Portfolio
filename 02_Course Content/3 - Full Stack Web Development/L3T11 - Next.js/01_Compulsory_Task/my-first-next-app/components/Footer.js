import Link from 'next/link';

//Added a footer for fun
const linkStyle = {
  marginRight: '15px', // Add single quotes around '15px'
  textDecoration: 'underline', // Add an underline to the links
  color: 'blue', // Change the link color to blue
};

const footerStyle = {
  display: 'flex', // Display the links in a horizontal row
  justifyContent: 'center', // Align links to the center horizontally
};

const Footer = () => (
  <div style={footerStyle}>
    <Link href="/">
      <p style={linkStyle}>Home</p>
    </Link>
    <Link href="/about">
      <p style={linkStyle}>About</p>
    </Link>
    <Link href="/projects">
      <p style={linkStyle}>Projects</p>
    </Link>
    <Link href="/contact">
      <p style={linkStyle}>Contact</p>
    </Link>
  </div>
);

export default Footer;
