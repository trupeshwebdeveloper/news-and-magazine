import { useEffect, useState } from "react";
import { Container, ProfileCard, Title } from "../../../components"
import axios from "axios";

export const AboutTeam = () => {
  const [MegaNewsTeam, setMegaNewsInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/MegaNewsTeam')
      .then((response) => {
        setMegaNewsInfo(response.data)
      })
      .catch((error) => {
        console.log(`Error He Bhai ${error}`);
      })
  });
  return (
    <section>
      <Container>
        <Title>Mega News team</Title>
        <div className="grid grid-cols-6 gap-6">
          {MegaNewsTeam.map((content, index) => (
            <ProfileCard key={index} src={content.img} TeamName={content.Name} position={content.position} />
          ))}
        </div>
      </Container>
    </section>
  )
}
