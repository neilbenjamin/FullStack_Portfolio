import Link from 'next/link';

const headerStyle = {
  display: 'flex', // Display the links in a horizontal row
  justifyContent: 'flex-start', // Align links to the right horizontally
  paddingTop: '10px', // Add some top padding for spacing
};

const linkStyle = {
  marginLeft: '15px', // Add left margin for spacing between links
  textDecoration: 'underline', // Add an underline to the links
  color: 'blue', // Change the link color to blue
};

const Header = () => (
  <div style={headerStyle}>
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

export default Header;
