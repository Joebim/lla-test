import { TabsContent } from "~/components/ui/tabs";
import CharacterMediaLibrary from "../_component/character/media";

const page = () => {
  return (
    <>
      <TabsContent value="medialibrary">
        <CharacterMediaLibrary type="add" />
      </TabsContent>
    </>
  );
};

export default page;
