import Link from 'next/link'
import Layout from '../components/MyLayout'

const cardStyle = {
  maxWidth: '800px', // Adjust to match the first component's maxWidth
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px', // Adjust to match the first component's borderRadius
  textAlign: 'justify', // Adjust to match the first component's textAlign
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default () => (
  <Layout>
    <div style={cardStyle}>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
        Developer Portfolio
      </h1>
      <h3>My Journey Thus Far</h3>
      <p style={{
        fontSize: '1.2em',
        lineHeight: '1.5',
        maxWidth: '800px', // Adjust to match the first component's maxWidth
        margin: '0 auto',
        textAlign: 'justify' // Adjust to match the first component's textAlign
      }}>
        "Born in 2019 during the global pandemic, I found myself stuck at home with no way to pursue my passion for music and no source of income. 
        In 2020, I seized the opportunity to learn HTML and CSS online, and as ideas began to take shape, I embarked on a journey of online 
        education. By 2021, I stumbled upon WordPress and delved into the world of back-end computing, getting captivated by the power of WP. 
        The year 2022 saw me building WordPress sites, but I eventually grew restless and decided to switch gears, diving into the world of JavaScript.
        In 2023, my desire to learn coding correctly and my ambition to become a developer led me to discover Hyperion Dev, setting me on a path to achieve my goals. 
        Alongside my journey into web development, I currently balance a busy life as a Business Owner in the Events & Entertainment Industry, a 
        Post-Production Audio Engineer with two SAFTA's for Best Audio for a TV Production, a WordPress Developer, a Guitar Player, a DJ, and a Music Teacher and student.
        My lifestyle is characterized by a deep love for music and nature, a strong connection to family, a passion for cycling and maintaining peak physical fitness, 
        and a commitment to finding peace and harmony in every aspect of life."
      </p>
    </div>
  </Layout>
)
