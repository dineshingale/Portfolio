import React from 'react';

const ProjectCard = ({ title, description, videoId, githubLink, vercelLink, sd, isActive }) => {
  return (
    <div className={`project-card flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] h-auto rounded-3xl p-8 bg-zinc-800 flex flex-col justify-between ${isActive ? 'active' : ''}`}>
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex space-x-4 justify-center">
          <a href={`${githubLink}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 hover:border-white transition-colors">
            <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.619.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.085 2.91.829.091-.64.351-1.085.636-1.334-2.22-.251-4.555-1.116-4.555-4.931 0-1.087.389-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.099 2.638.64.696 1.029 1.588 1.029 2.675 0 3.825-2.338 4.671-4.562 4.929.357.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.59.688.482A10.04 10.04 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href={`${vercelLink}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 hover:border-white transition-colors">
            <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
          </a>
          <a href={`${sd}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 hover:border-white transition-colors">
            <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m19.707 7.293l-4-4A.996.996 0 0 0 15 3H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V8a.996.996 0 0 0-.293-.707zM17.586 8H16.5c-.827 0-1.5-.673-1.5-1.5V5.414L17.586 8zM17 19H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v1.5C14 7.879 15.121 9 16.5 9H18v9a1 1 0 0 1-1 1z"/>
            </svg>          
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;