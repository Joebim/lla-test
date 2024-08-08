import { TabsContent } from "~/components/ui/tabs";
import MediaLibrary from "../_component/media-library";

const page = () => {
  return (
    <TabsContent value="medialibrary">
      <MediaLibrary />
    </TabsContent>
  );
};

export default page;
