import { MapFilter, YMap } from "components/Map";
import { Wrapper } from "components/UI";

export default function Map() {
  return (
    <div className="page main-page">
      <Wrapper>
        <MapFilter />
        <YMap />
      </Wrapper>
    </div>
  );
}
