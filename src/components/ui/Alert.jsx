export default function Alert({ type, text }) {
  return (
    <div className="container">
      <div className={`alert alert-${type || "danger"}`}>
        {text || "Si è verificato un errore"}
      </div>
    </div>
  );
}
