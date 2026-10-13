import ProjectsGrid from '@/components/ProjectsGrid';
import {projects} from '@/data/projects';
export const metadata={title:'Projects'};
export default function Projects(){
  return(<section className="pt-12"><h1 className="title text-6xl">The Collection</h1>
    <p className="mt-2 font-bold text-ink/75">Finished issues and stories still being drawn.</p><ProjectsGrid projects={projects}/></section>);
}
