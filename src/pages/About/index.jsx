import '@/styles/pages.scss'
import Banner from '@/components/ui/Banner'
import aboutBanner from '@/assets/img/banners/about-banner.png'
import Collapse from '@/components/ui/Collapse'
//import opened from '@/assets/img/icons/opened-arrow.png'
import closed from '@/assets/img/icons/closed-arrow.png'
//import smallOpened from '@/assets/img/icons/small-opened-arrow.png'
//import smallClosed from '@/assets/img/icons/small-closed-arrow.png'

function About() {
  return (
    <div className="about-page">
      <Banner image={aboutBanner} altimg="Photo de montagnes eneigées" />
      <div className="collapse">
        <Collapse title="Fiabilité" icon={closed} />
        <Collapse title="Respect" icon={closed} />
        <Collapse title="Service" icon={closed} />
        <Collapse title="Sécurité" icon={closed} />
      </div>
    </div>
  )
}

export default About
