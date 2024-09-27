import { useState } from 'react';
import Fullstack from './FullStack';
import Design from './Design';
import DataScience from './DataSciencie';
import LoadingSpinner from './Loading';
import { 
  ProjectContainer,  
  CategoryContainer, 
  CategoryButton,  
  Title
} from '../styles/ProjectsStyles';
import { categoryTypesEnum } from '../utils';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(categoryTypesEnum.Fullstack);
  const [loading, setLoading] = useState(false); 

  const handleCategoryChange = (category) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setLoading(false); 
    }, 500);
  };

  return (
    <ProjectContainer>
      <Title>
        <span>Projects</span>
      </Title>

      {!loading && (
        <>
          <CategoryContainer>
            <CategoryButton onClick={() => handleCategoryChange(categoryTypesEnum.Fullstack)}>
              Fullstack Development
            </CategoryButton>
            <CategoryButton onClick={() => handleCategoryChange(categoryTypesEnum.WebDesigner)}>
              Web Design
            </CategoryButton>
          </CategoryContainer>

          {activeCategory === categoryTypesEnum.Fullstack && <Fullstack />}
          {activeCategory === categoryTypesEnum.WebDesigner && <Design />}
          {activeCategory === 'datascience' && <DataScience />}
        </>
      )}

      {loading && <LoadingSpinner />}
    </ProjectContainer>
  );
};

export default Projects;
