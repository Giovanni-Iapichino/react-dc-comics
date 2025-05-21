export default function Alert({ type, children }) {
  return (
    <div className="container">
      <div className={`alert alert-${type || "danger"}`}>
        {children || "Si è verificato un errore!"}
      </div>
    </div>
  );
}
