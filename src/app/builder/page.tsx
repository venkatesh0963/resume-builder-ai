import { TopNav } from "@/components/builder/TopNav";
import { LeftPanel } from "@/components/builder/LeftPanel";
import { RightPanel } from "@/components/builder/RightPanel";
import { TemplateSidebarGallery } from "@/components/builder/TemplateSidebarGallery";

export default function BuilderPage() {
  return (
    <>
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel />
        <TemplateSidebarGallery />
        <RightPanel />
      </div>
    </>
  );
}
