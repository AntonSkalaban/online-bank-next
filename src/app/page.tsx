import { Courses, Products, Services } from "components/Home";
import { Wrapper } from "components/UI";

export default function Home() {
  return (
    <div className="page main-page">
      <Wrapper>
        <Services />
        <Products />
        <Courses />
      </Wrapper>
    </div>
  );
}
