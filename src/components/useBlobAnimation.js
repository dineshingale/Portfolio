import { useRef, useEffect, useCallback, useState } from 'react';
import { createNoise2D } from 'simplex-noise';
import { spline } from '@georgedoescode/spline';

// Utility function
const map = (n, start1, end1, start2, end2) => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

const useBlobAnimation = (pathRef, containerRef) => {
  const animationRef = useRef(null);
  const simplexRef = useRef(createNoise2D());
  const [noiseStep, setNoiseStep] = useState(0.005);
  const hueNoiseOffsetRef = useRef(0);
  const [dimensions, setDimensions] = useState({ 
    width: 300, 
    height: 300,
    radius: 140,
    centerX: 150,
    centerY: 150
  });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const size = Math.min(width, height);
        const radius = size * 0.45;
        const centerX = size / 2;
        const centerY = size / 2;
        
        setDimensions({
          width: size,
          height: size,
          radius,
          centerX,
          centerY
        });
      }
    };

    updateDimensions();
    
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);

  // Create points with memoization
  const createPoints = useCallback(() => {
    const points = [];
    const angleStep = (Math.PI * 2) / 6;
    
    for (let i = 1; i <= 6; i++) {
      const theta = i * angleStep;
      const x = dimensions.centerX + Math.cos(theta) * dimensions.radius;
      const y = dimensions.centerY + Math.sin(theta) * dimensions.radius;

      points.push({
        x,
        y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000
      });
    }
    return points;
  }, [dimensions]);

  // Animation loop
  const animate = useCallback(() => {
    if (!pathRef.current) return;
    
    const points = createPoints();
    const pathElement = pathRef.current;
    
    const animationFrame = () => {
      pathElement.setAttribute("d", spline(points, 1, true));

      // Update points position
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const nX = simplexRef.current(point.noiseOffsetX, point.noiseOffsetX);
        const nY = simplexRef.current(point.noiseOffsetY, point.noiseOffsetY);
        
        const displacement = 20 * 0.3 * (dimensions.radius / 140);
        const x = map(nX, -1, 1, point.originX - displacement, point.originX + displacement);
        const y = map(nY, -1, 1, point.originY - displacement, point.originY + displacement);
        
        point.x = x;
        point.y = y;
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      // Update colors
      const hueNoise = simplexRef.current(hueNoiseOffsetRef.current, hueNoiseOffsetRef.current);
      const hue = map(hueNoise, -1, 1, 0, 360);
      document.documentElement.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
      document.documentElement.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);

      hueNoiseOffsetRef.current += noiseStep / 6;
      
      animationRef.current = requestAnimationFrame(animationFrame);
    };
    
    animationRef.current = requestAnimationFrame(animationFrame);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [noiseStep, createPoints, pathRef, dimensions]);

  // Set up animation and event listeners
  useEffect(() => {
    const handleMouseEnter = () => setNoiseStep(0.01);
    const handleMouseLeave = () => setNoiseStep(0.005);
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, containerRef]);

  return dimensions;
};

export default useBlobAnimation;