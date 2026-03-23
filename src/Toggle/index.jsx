import "./style.css"

export default function Toggle({ toggled, onClick, ariaLabel = "Toggle color theme" }) {
  return (
    <button
      type="button"
      className={`toggle${toggled ? " night" : ""}`}
      onClick={onClick}
      role="switch"
      aria-checked={toggled}
      aria-label={ariaLabel}
    >
      <span className="notch">
        <span className="crater" />
        <span className="crater" />
        <span className="crater" />
      </span>
      <span className="block">
        <span className="shape sm" />
        <span className="shape sm" />
        <span className="shape md" />
        <span className="shape lg" />
      </span>
    </button>
  )
}
