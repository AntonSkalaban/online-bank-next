import {
  Courses,
  OfficesAndATMs,
  Products,
  Services,
  Widgets,
} from "components/Home";
import { Wrapper } from "components/UI";

import "./style.scss";

export default function Home() {
  return (
    <div className="page main-page">
      <Wrapper>
        <Services />
        <Products />
        <Widgets />
        <Courses />
        <OfficesAndATMs />
      </Wrapper>
    </div>
  );
}
