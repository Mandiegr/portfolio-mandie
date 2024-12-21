import { useState } from 'react';
import Fullstack from './FullStack';
import Design from './Design';

import LoadingSpinner from './Loading';
import { 
  ProjectContainer,  
  CategoryContainer, 
  CategoryButton,  
  IconWrapper
} from '../styles/ProjectsStyles';
import { categoryTypesEnum } from '../utils';
import { FaDesktop, FaLaptop } from 'react-icons/fa'; 

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
   

      {!loading && (
        <>
          <CategoryContainer>
            <CategoryButton onClick={() => handleCategoryChange(categoryTypesEnum.Fullstack)}>
              <IconWrapper><FaDesktop size={20} /></IconWrapper>
              Fullstack 
            </CategoryButton>
            <CategoryButton onClick={() => handleCategoryChange(categoryTypesEnum.WebDesigner)}>
              <IconWrapper><FaLaptop size={20} /></IconWrapper>
              Web Design
            </CategoryButton>
            
          </CategoryContainer>

          {activeCategory === categoryTypesEnum.Fullstack && <Fullstack />}
          {activeCategory === categoryTypesEnum.WebDesigner && <Design />}
        </>
      )}

      {loading && <LoadingSpinner />}
    </ProjectContainer>
  );
};

export default Projects;
