import { TabsContent } from "~/components/ui/tabs";
import AnimationsMediaLibrary from "../_component/animations/media";

const page = () => {
  return (
    <>
      <TabsContent value="medialibrary">
        <AnimationsMediaLibrary type="add" />
      </TabsContent>
    </>
  );
};

export default page;
