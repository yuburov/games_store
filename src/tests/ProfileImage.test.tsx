import renderer from "react-test-renderer";
import ProfileImage from "../components/profile/ProfileImage";

describe("ProfileInfo component tests", () => {
  test("should render the default avatar", () => {
    const component = renderer.create(<ProfileImage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
