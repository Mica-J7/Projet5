import '@/styles/pages.scss'
import Banner from '@/components/ui/Banner'
import aboutBanner from '@/assets/img/banners/about-banner.webp'
import Collapse from '@/components/ui/Collapse'
//import opened from '@/assets/img/icons/opened-arrow.png'
import closed from '@/assets/img/icons/closed-arrow.png'
//import smallOpened from '@/assets/img/icons/small-opened-arrow.png'
//import smallClosed from '@/assets/img/icons/small-closed-arrow.png'

function About() {
  return (
    <div className="about-page">
      <Banner image={aboutBanner} altimg="Photo de montagnes eneigées" />
      <div className="collapse-section">
        <Collapse title="Fiabilité" icon={closed}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" icon={closed}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service" icon={closed}>
          <p>
            La qualité du service est au coeur de notre engaement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>
        <Collapse title="Sécurité" icon={closed}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default About
