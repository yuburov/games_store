import renderer from "react-test-renderer";
import SearchInput from "../components/search/SearchInput";

describe("SearchInput component tests", () => {
  test("should render input for searching", () => {
    const component = renderer.create(<SearchInput value="" onChangeText={(e) => e.target} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
