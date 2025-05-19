


function TeamCard({name="Driver name", team="Team name"}) {
  return (
    <div className="card-rotate">
          <div className="card">
            <h3>{name}</h3>
            <h4>{team}</h4>
        </div>
    </div>
  );
}

export default TeamCard;