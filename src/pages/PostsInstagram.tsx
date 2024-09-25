import React, { useState, useEffect, useRef } from 'react';
import usePostIntagramStyles from '../styles/InstagramGallery';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

const mockInstagramPosts: InstagramPost[] = [
  { id: '1', caption: 'Post 1', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '2', caption: 'Post 2', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '3', caption: 'Post 3', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '4', caption: 'Post 4', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
];

const InstagramGallery: React.FC = () => {
  const classes = usePostIntagramStyles();
  const postsLength = mockInstagramPosts.length;
  const currentIndexRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Função para iniciar o loop do carrossel
  const startCarouselLoop = () => {
    intervalRef.current = window.setInterval(() => {
      if (carouselRef.current) {
        currentIndexRef.current = (currentIndexRef.current + 1) % postsLength; // Avança para o próximo índice
        const scrollTo = (currentIndexRef.current * 350); // Altera para o valor correto baseado na largura do item
        carouselRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth' // Transição suave ao mover
        });
      }
    }, 5000); // Avança a cada 3 segundos
  };

  useEffect(() => {
    startCarouselLoop();

    return () => {
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar o componente
      }
    };
  }, [postsLength]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeft.current = carouselRef.current?.scrollLeft || 0;

    // Pausa o carrossel enquanto está sendo arrastado
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;

    // Reinicia o loop do carrossel ao soltar o mouse
    startCarouselLoop();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;

    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Aumenta a sensibilidade do arraste
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className={classes.carouselContainer}>
      <h1>@teste.instagram</h1>
      <div
        ref={carouselRef}
        className={classes.carouselContentWrapper}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {/* Renderiza os posts */}
        {mockInstagramPosts.map((post) => (
          <div key={post.id} className={classes.carouselContent} style={{ minWidth: '300px' }}>
            <img
              src={post.media_url}
              alt={post.caption}
              className={classes.carouselImage}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
