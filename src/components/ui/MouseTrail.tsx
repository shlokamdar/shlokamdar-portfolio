import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
}

export const MouseTrail = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Create a new particle on mouse move
            const newParticle: Particle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 8 + 4, // Random size between 4 and 12
                color: Math.random() > 0.5 ? '#a78bfa' : '#93c5fd', // Lavender or Blue
            };

            setParticles((prev) => [...prev.slice(-15), newParticle]); // Keep last 15 particles
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        // Cleanup old particles
        const interval = setInterval(() => {
            setParticles((prev) => prev.filter((p) => Date.now() - p.id < 600)); // Remove after 600ms
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full animate-ping opacity-75"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        transform: 'translate(-50%, -50%)',
                        animationDuration: '0.8s',
                    }}
                />
            ))}
        </div>
    );
};
