//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
//import Image from 'react-bootstrap/Image'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
	    <div style={{ textAlign: 'center', padding: '20px' }}>
  <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
    Developer Portfolio
  </h1>
  <p style={{
  fontSize: '1.2em',
  lineHeight: '1.5',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'justify' // Add this property to justify the text content
}}>
  "As a student and junior developer, my experience at Hyperion Dev has been incredibly valuable
  for learning in-demand skills in the global web development industry. I am eagerly looking
  forward to expanding upon what I've learned here and applying it to real-world projects.
  In addition, I plan to enhance my skill set further by enrolling in additional courses in 2024.
  This journey has been instrumental in my professional growth, and I'm excited to continue on this path." - Neil Benjamin
</p>

  <img
    src="/static/images/react.jpg"
    alt="Neil Benjamin"
    style={{ maxWidth: '40%', marginTop: '20px', borderRadius: '10px' }}
  />
</div>
  </Layout>
)