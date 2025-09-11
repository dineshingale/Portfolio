import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const container = document.getElementById('card-container');
    const cards = container?.querySelectorAll('.project-card');

    if (!container || !cards) return;

    const updateActiveCard = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let newActiveIndex = 0;
      
      cards.forEach((card, index) => {
        const cardElement = card;
        const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < cardElement.offsetWidth / 2) {
          newActiveIndex = index;
        }
      });
      setActiveCardIndex(newActiveIndex);
    };

    container.addEventListener('scroll', updateActiveCard);
    window.addEventListener('resize', updateActiveCard);

    updateActiveCard();

    return () => {
      container.removeEventListener('scroll', updateActiveCard);
      window.removeEventListener('resize', updateActiveCard);
    };
  }, []);

  const projectCards = [
    { title: "GaganYatri", 
      description: "GaganYatri is a space adventure booking web application that offers six unique outer space adventures. Users can choose from three different spacecraft, launching from four distinct launch sites — offering 72 possible combinations for a truly customizable and unforgettable space experience!", 
      videoId: "jNQXAC9IVRw",
      githubLink:"https://github.com/dineshingale", 
      vercelLink:"https://gaganyatri.vercel.app/", 
      sd:"resume.pdf" 
    },
    { title: "CloudKeep", 
      description: "Cloudkeep a SaaS platform designed for Secure multimedia file cloud storage. system enables secure file uploads, allowing users to store, preview, share, and download multimedia content with flexible access controls. provide responsive and grid structure for easy management.", 
      videoId: "JgDNFQ2RaLQ",
      githubLink:"", 
      vercelLink:"", 
      sd:"" 
    },
    { title: "Project Delta", 
      description: "A data visualization project using D3.js to display complex financial data in a clean and interactive way.", 
      videoId: "FwF44o7nFfE",
      githubLink:"", 
      vercelLink:"", 
      sd:"" 
    },
    { title: "Project Epsilon", 
      description: "A real-time chat application built with WebSocket and a custom backend. It supports multiple users and chat rooms.", 
      videoId: "2-gT-2aE7w4",
      githubLink:"", 
      vercelLink:"", 
      sd:"" 
    }
  ];

  return (
     <div className="w-[95%] max-w-7xl p-4 md:p-6 bg-black border border-gray-400 rounded-xl shadow-lg">
      <h2 className="text-center text-4xl font-bold mb-12 glow-heading">My Projects</h2>
      <div id="card-container" className="flex overflow-x-scroll scroll-snap-x p-4 space-x-8">
        {projectCards.map((card, index) => (
          <ProjectCard
            key={index}
            title={card.title}
            description={card.description}
            githubLink={card.githubLink}
            vercelLink={card.vercelLink}
            sd={card.sd}
            videoId={card.videoId}
            isActive={index === activeCardIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;