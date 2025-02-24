import Plate from "../../components/ui/Plate/Plate";
import TextArea from "../../components/ui/TextArea/TextArea";
import TextInput from "../../components/ui/TextInput/TextInput";

const FiltersPage = () => {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <Plate text={"Title"} />
        <Plate text={"Senior"} />
        <Plate text={"Part time"} />
      </div>
      <div style={{ margin: "10px" }}>
        <TextArea />
      </div>
      <div style={{ margin: "10px" }}>
        <TextInput />
      </div>
    </>
  );
};

export default FiltersPage;
