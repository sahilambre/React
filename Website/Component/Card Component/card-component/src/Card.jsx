import profilePic from "./assets/profile.png";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} className="card-image" alt="Profile picture" />
      <h2 className="card-title">Sahil Ambre</h2>
      <p className="card-text">
        Masters Student at Stevens Institute of Technology
      </p>
    </div>
  );
}

export default Card;
