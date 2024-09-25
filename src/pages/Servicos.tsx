import React, { useState, useRef, useEffect } from 'react';
import useServico from '../styles/ServiceGallery'; // Importando os estilos JSS

interface Service {
  id: number;
  title: string;
  image: string;
  topics: { topicTitle: string; content: string }[];
}

const serviceData: Service[] = [
  {
    id: 1,
    title: 'Serviço 1',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 1.1', content: '<p>Este é um conteúdo extenso do Tópico 1.1. <br/> Pode incluir parágrafos, imagens, ou qualquer conteúdo HTML que precise.</p>' },
      { topicTitle: 'Tópico 1.2', content: '<p>Conteúdo detalhado e extenso do Tópico 1.2. <br/> Pode ser um artigo longo.</p>' },
    ],
  },
  {
    id: 2,
    title: 'Serviço 2',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 2.1', content: '<p>Conteúdo detalhado e extenso do Tópico 2.1.</p>' },
      { topicTitle: 'Tópico 2.2', content: '<p>Conteúdo detalhado e extenso do Tópico 2.2.</p>' },
    ],
  },
  {
    id: 3,
    title: 'Serviço 3',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 4,
    title: 'Serviço 4',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 5,
    title: 'Serviço 5',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 6,
    title: 'Serviço 6',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 7,
    title: 'Serviço 7',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 8,
    title: 'Serviço 8',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
  {
    id: 9,
    title: 'Serviço 9',
    image: 'https://via.placeholder.com/300',
    topics: [
      { topicTitle: 'Tópico 3.1', content: '<p>Conteúdo detalhado e extenso do Tópico 3.1.</p>' },
      { topicTitle: 'Tópico 3.2', content: '<p>Conteúdo detalhado e extenso do Tópico 3.2.</p>' },
    ],
  },
];

const ServiceGallery: React.FC = () => {

  const classes = useServico();
  const [expandedServiceId, setExpandedServiceId] = useState<number | null>(null);
  const [expandedTopicIndex, setExpandedTopicIndex] = useState<number | null>(null);
  const [previousScrollPosition, setPreviousScrollPosition] = useState<number>(0); // Estado para armazenar a posição anterior da rolagem

  // Armazena as referências dos serviços
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (expandedServiceId !== null && serviceRefs.current[expandedServiceId]) {
      const element = serviceRefs.current[expandedServiceId];
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top; // Posição do elemento em relação ao viewport
        const offsetPosition = window.scrollY + elementPosition - 0; // Adiciona um offset de 100 pixels
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [expandedServiceId]);

  const toggleTopic = (serviceId: number, topicIndex: number) => {
    if (expandedServiceId === serviceId && expandedTopicIndex === topicIndex) {
      // Se o tópico já estiver expandido, restaurar a posição anterior da rolagem
      window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
      setExpandedServiceId(null);
      setExpandedTopicIndex(null);
    } else {
      // Armazenar a posição da rolagem antes de expandir
      setPreviousScrollPosition(window.scrollY);
      setExpandedServiceId(serviceId);
      setExpandedTopicIndex(topicIndex);
    }
  };

  return (
    <div className={classes.galleryContainer}>
      <h1 className={classes.titlePrincipal}>Galeria de Serviços</h1>
      <div className={classes.serviceGallery}>
        {serviceData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[service.id] = el)} // Atribui referência ao serviço
            className={`${classes.serviceItem} ${expandedServiceId === service.id ? classes.expandedItem : ''}`}
          >
            <img src={service.image} alt={service.title} className={classes.serviceImage} />
            <h2 className={classes.title}>{service.title}</h2>
            <div className={classes.topics}>
              {service.topics.map((topic, topicIndex) => (
                <div key={topicIndex}>
                  <p
                    className={classes.topicParagraph}
                    onClick={() => toggleTopic(service.id, topicIndex)}
                  >
                    {topic.topicTitle}
                  </p>
                  {expandedServiceId === service.id && expandedTopicIndex === topicIndex && (
                    <div
                      className={classes.topicContentFull}
                      dangerouslySetInnerHTML={{ __html: topic.content }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;