import { TopNav } from "@/components/builder/TopNav";
import { CVLeftPanel } from "@/components/cv-builder/CVLeftPanel";
import { CVSidebarGallery } from "@/components/cv-builder/CVSidebarGallery";
import { CVRightPanel } from "@/components/cv-builder/CVRightPanel";

export default function CVBuilderPage() {
  return (
    <>
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <CVLeftPanel />
        <CVSidebarGallery />
        <CVRightPanel />
      </div>
    </>
  );
}
