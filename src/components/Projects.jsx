import { useState} from 'react';
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

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('fullstack');
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

      <CategoryContainer>
        <CategoryButton onClick={() => handleCategoryChange('fullstack')}>
          Fullstack Development
        </CategoryButton>
        <CategoryButton onClick={() => handleCategoryChange('design')}>
          Web Design
        </CategoryButton>
      </CategoryContainer>

      {loading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          {activeCategory === 'fullstack' && <Fullstack />}
          {activeCategory === 'design' && <Design />}
          {activeCategory === 'datascience' && <DataScience />}
        </>
      )}
    </ProjectContainer>
  );
};

export default Projects;
