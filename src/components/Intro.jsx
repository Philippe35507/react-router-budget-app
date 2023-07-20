// rrd import
import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret for personal freedom. Start you
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            arial-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser"></input>
          <button type="submit" className="btn btn--dark">
            <span>Create acount</span>
            <UserPlusIcon> width={20}</UserPlusIcon>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;
