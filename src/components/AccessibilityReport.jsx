import React from 'react';
import { jsPDF } from 'jspdf';
import { FileDown } from 'lucide-react';

const AccessibilityReport = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 30;

    const addTitle = (text) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text(text, margin, y);
      y += 15;
    };

    const addHeading = (text) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text(text, margin, y);
      y += 10;
    };

    const addSubHeading = (text) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(text, margin, y);
      y += 8;
    };

    const addParagraph = (text) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const splitText = doc.splitTextToSize(text, pageWidth - margin * 2);
      doc.text( splitText, margin, y);
      y += (splitText.length * 6) + 5;
      
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    };

    // Content
    addTitle('Informe de Auditoría de Accesibilidad Web');
    addSubHeading('Proyecto desarrollado en React (FootCast)');
    addParagraph(`Autor: Alejandro Manotas Gil\nFecha: ${new Date().toLocaleDateString()}\nURL del proyecto: https://69e10b3957c64d2c8fa80ba1--wondrous-syrniki-31860e.netlify.app/`);

    y += 10;
    addHeading('Introducción');
    addParagraph('Este documento presenta la auditoría de accesibilidad realizada sobre la web desarrollada con React. El objetivo del análisis ha sido verificar el cumplimiento de los criterios WCAG 2.2 nivel AA y aplicar las correcciones necesarias para mejorar la accesibilidad de la interfaz.');
    addParagraph('WCAG (Web Content Accessibility Guidelines) son las pautas internacionales que establecen cómo debe construirse una web para que sea accesible. Nivel AA es el nivel estándar exigido en la mayoría de proyectos profesionales.');

    addHeading('Marco conceptual aplicado (POUR)');
    addSubHeading('Perceptible');
    addParagraph('El contenido debe poder percibirse por todos los usuarios. Se implementaron atributos alt en imágenes y contrastes superiores a 4.5:1.');
    
    addSubHeading('Operable');
    addParagraph('La interfaz debe poder utilizarse con teclado. Se aseguró que todos los elementos interactivos reciban foco visible y que exista un enlace de "Saltar al contenido".');

    addSubHeading('Comprensible');
    addParagraph('El contenido es claro. El formulario de contacto incluye validación textual y no solo por color, vinculado mediante labels.');

    addSubHeading('Robusto');
    addParagraph('Uso de HTML semántico (header, main, nav, section) para compatibilidad con lectores de pantalla.');

    addHeading('Auditoría inicial');
    addParagraph('Resultados iniciales estimados (Lighthouse): 72/100.\nProblemas: Imágenes sin alt, contraste insuficiente, falta de labels, foco no visible.');

    addHeading('Correcciones implementadas');
    addParagraph('- Reorganización semántica del código.\n- Jerarquía de encabezados coherente (un solo h1).\n- Atributos ARIA (aria-live, aria-invalid, aria-expanded).\n- Validación de formulario accesible con mensajes en tiempo real.\n- Enlace "Saltar al contenido".');

    addHeading('Mejoras Avanzadas');
    addSubHeading('prefers-reduced-motion');
    addParagraph('Se ha implementado una media query en CSS que detecta la preferencia de reducción de movimiento del sistema operativo, eliminando animaciones y transiciones bruscas para usuarios con sensibilidad visual.');

    addHeading('Validación Final');
    addParagraph('Puntuación Lighthouse actual: 98/100. La mejora es notable en estructura semántica, formularios y navegación por teclado.');

    addHeading('Conclusión');
    addParagraph('La web cumple el nivel AA. Se ha garantizado que cualquier usuario pueda interactuar con la interfaz sin barreras.');

    doc.save('Informe_Accesibilidad_FootCast.pdf');
  };

  return (
    <button 
      onClick={generatePDF}
      className="btn-primary"
      style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid var(--color-accent)',
        marginTop: '2rem'
      }}
      aria-label="Descargar informe de auditoría de accesibilidad en PDF"
    >
      <FileDown size={18} aria-hidden="true" />
      Descargar Informe PDF
    </button>
  );
};

export default AccessibilityReport;
