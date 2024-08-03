import React from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Results: React.FC = () => {
  const location = useLocation();
  const answers = location.state?.answers || [];
  const navigate = useNavigate();

  const getRecommendation = () => {
    if (answers.includes('Light')){
        if(answers.includes('A lot')){
            if(answers.includes('Sweet')){
                return "Mexico"
            }
            if(answers.includes('Acidic')){
                return "Colombia"
            }
            if(answers.includes('Bitter')){
                return "Brazil"
            }

        }
        if(answers.includes('Some')){
            if(answers.includes('Sweet')){
                return "Mexico"
            }
            if(answers.includes('Acidic')){
                return "Costa Rica"
            }
            if(answers.includes('Bitter')){
                return "Madagascar"
            }
        }
        if(answers.includes('As little as possible')){
            if(answers.includes('Sweet')){
                return "Burundi"
            }
            if(answers.includes('Acidic')){
                return "Ethiopia"
            }
            if(answers.includes('Bitter')){
                return "Papua New Guinea"
            }
        }
    }
    if (answers.includes('Medium')){
        if(answers.includes('A lot')){
            if(answers.includes('Sweet')){
                return "Mexico"
            }
            if(answers.includes('Acidic')){
                return "El Salvador"
            }
            if(answers.includes('Bitter')){
                return "Colombia"
            }

        }
        if(answers.includes('Some')){
            if(answers.includes('Sweet')){
                return "Rwanda"
            }
            if(answers.includes('Acidic')){
                return "Honduras"
            }
            if(answers.includes('Bitter')){
                return "Hawaii"
            }
        }
        if(answers.includes('As little as possible')){
            if(answers.includes('Sweet')){
                return "Kenya"
            }
            if(answers.includes('Acidic')){
                return "Costa Rica"
            }
            if(answers.includes('Bitter')){
                return "Colombia"
            }
        }
    }
    if (answers.includes('Dark')){
        if(answers.includes('A lot')){
            if(answers.includes('Sweet')){
                return "Indonesia"
            }
            if(answers.includes('Acidic')){
                return "Costa Rica"
            }
            if(answers.includes('Bitter')){
                return "Colombia"
            }

        }
        if(answers.includes('Some')){
            if(answers.includes('Sweet')){
                return "El Salvador"
            }
            if(answers.includes('Acidic')){
                return "Costa Rica"
            }
            if(answers.includes('Bitter')){
                return "Hawaii"
            }
        }
        if(answers.includes('As little as possible')){
            if(answers.includes('Sweet')){
                return "Colombia"
            }
            if(answers.includes('Acidic')){
                return "Sumatra"
            }
            if(answers.includes('Bitter')){
                return "Indonesia"
            }
        }
    }
 
  };

  return (
    <div>
      <h2>Based on your answers, I recommend a coffee from:</h2>
      <h3>{getRecommendation()}</h3>
      <button onClick={() => navigate('/')}>Start over</button>
    </div>
  );
};

export default Results;