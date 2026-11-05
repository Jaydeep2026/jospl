import './ManagementTeam.css';

/** members: [{ name, role, bio, image, alt }] */
export default function ManagementTeam({ members }) {
  return (
    <div className="team-gread-area bg-gray default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="creative-items col-lg-12">
            {members.map((member) => (
              <div className="creative-item" key={member.name}>
                <div className="row align-center">
                  <div className="col-lg-4">
                    <img src={member.image} alt={member.alt} />
                  </div>
                  <div className="col-lg-8">
                    <div className="info">
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                      <p>{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
