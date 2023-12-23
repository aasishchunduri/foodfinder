import User from "./User";
import { UserClass } from "./UserClass";
const About = () => {
  return (
    <div>
      <h1> Hello, this is about page</h1>

      <UserClass name={"Aasish props"} location={"Charlotte"} />
    </div>
  );
};

export default About;
