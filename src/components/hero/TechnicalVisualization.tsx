"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const nodes = [
  { id: "ai", x: 50, y: 20, label: "AI" },
  { id: "software", x: 50, y: 45, label: "SOFTWARE" },
  { id: "web3", x: 75, y: 55, label: "WEB3" },
  { id: "fintech", x: 35, y: 70, label: "FINTECH" },
  { id: "products", x: 50, y: 85, label: "PRODUCTS" },
];

const connections = [
  ["ai", "software"],
  ["software", "web3"],
  ["software", "fintech"],
  ["fintech", "products"],
];

function PulseDot({ delay }: { delay: number }) {
  return (
    <motion.circle
      r="2"
      fill="#55DDE0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function TechnicalVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width || 400, height: rect.height || 400 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55DDE0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8274FF" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {connections.map(([from, to], index) => {
          const fromNode = nodes.find((n) => n.id === from)!;
          const toNode = nodes.find((n) => n.id === to)!;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              initial={shouldReduceMotion ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
              animate={shouldReduceMotion || isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
            />
          );
        })}

        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          >
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="1.2"
              fill="#11171D"
              stroke="#55DDE0"
              strokeWidth="0.4"
              opacity="0.6"
            />
            {!shouldReduceMotion && <PulseDot delay={index * 0.4} />}
          </motion.g>
        ))}

        {isInView && !shouldReduceMotion && (
          <>
            {[0, 0.8, 1.6, 2.4, 3.2].map((delay, i) => (
              <PulseDot key={`pulse-extra-${i}`} delay={delay} />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}
