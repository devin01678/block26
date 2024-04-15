export default function ContactInfo({
  selectedContactId,
  setSelectedContactId,
}) {
  function handleClick() {
    setSelectedContactId(null);
  }

  return (
    <div className="details">
      <h1>Details</h1>
      <span>
        {" "}
        {selectedContactId.address.street} {selectedContactId.address.city}
      </span>
      <button className="btn" onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
}
