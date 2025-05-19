import '@/styles/ui.scss'

function Collapse({ title, icon }) {
  return (
    <button className="collapse__btn">
      <h2>{title}</h2>
      <img src={icon} alt="Icone du menu déroulant" />
    </button>
  )
}

export default Collapse
