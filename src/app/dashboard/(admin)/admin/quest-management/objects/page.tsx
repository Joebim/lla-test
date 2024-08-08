import { TabsContent } from "~/components/ui/tabs";
import ObjectMediaLibrary from "../_component/objects/media";

const page = () => {
  return (
    <>
      <TabsContent value="medialibrary">
        <ObjectMediaLibrary type="add" />
      </TabsContent>
    </>
  );
};

export default page;
