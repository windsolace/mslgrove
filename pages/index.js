import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@components/Header'
import Button from '@components/button/Button';
import Card from '@components/card/Card';
import Carousel from '@components/carousel/Carousel';
import Stack from 'react-bootstrap/Stack';

export default function Home() {
  return (
    <div style={{marginTop:-2+'rem'}}>
      <Carousel></Carousel>
      <div className="container" style={{paddingTop:1+'rem'}}>
        
        <section className="container">
          <Header title="Events" />
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
          <div className="container">
            <Stack className="container" direction="horizontal" gap={3}>
              <Card></Card>
              <Card></Card>
            </Stack>
          </div>
        </section>
        <section className="container">
          <Header title="Development Progress" />
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate arcu sed urna rutrum, id aliquet risus eleifend. Quisque augue magna, consequat vel lacus ut, cursus interdum dolor. Nunc porttitor efficitur nisi, sed dapibus ante facilisis quis. In tempor tortor sit amet facilisis ultricies. Nam efficitur neque dapibus justo tincidunt vestibulum. Vestibulum sagittis porttitor dapibus. Aliquam vehicula elementum pellentesque. Praesent ullamcorper diam et interdum vulputate. Suspendisse nec pellentesque risus. Pellentesque ac neque finibus, mattis augue eget, tempor est. Mauris accumsan pellentesque diam sit amet consectetur. Proin pharetra diam a risus facilisis condimentum a eget lacus. Donec lacinia viverra aliquet. Aenean vel libero bibendum, congue elit in, viverra orci. Integer posuere quis dolor vel interdum. Etiam ac volutpat urna.
          </p>
          <Button text="Click ME!"></Button>
        </section>
      </div>
    </div>
  )
}
