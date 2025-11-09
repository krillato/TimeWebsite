// @ts-nocheck
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import codesandbox from "@/public/img/footer/codesandbox.png";
import facebook from "@/public/img/footer/facebook.png";
import github from "@/public/img/footer/github.png";
import ig from "@/public/img/footer/ig.png";
import linkin from "@/public/img/footer/linkin.png";
import Image from "next/image";

// Swiper Cards Component
const SwiperCards = React.memo(({ cards, sectionId }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto pb-8 select-none no-scrollbar py-16"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="flex space-x-6 select-none no-scrollbar  min-w-max px-4 sm:px-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={` ${
              sectionId === "about"
                ? "bg-gray-900/50"
                : sectionId === "experience"
                ? "bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
                : sectionId === "projects"
                ? "bg-gray-900/50"
                : "bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
            } backdrop-blur-sm border ${
              sectionId === "experience" || sectionId === "contact"
                ? "border-indigo-700/50"
                : "border-gray-800"
            } rounded-2xl p-6 sm:p-8 w-72 sm:w-80 transition-all duration-300 pointer-events-auto ${
              hoveredIndex === idx
                ? "scale-110 shadow-2xl border-indigo-400 ring-4 ring-indigo-400/50 -translate-y-2 z-50"
                : "hover:scale-105 hover:shadow-xl hover:border-indigo-500"
            }`}
            style={{
              boxShadow:
                hoveredIndex === idx
                  ? "0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)"
                  : undefined,
              position: "relative",
              zIndex: hoveredIndex === idx ? 50 : 1,
            }}
          >
            {sectionId === "about" && (
              <>
                <div
                  className={`text-5xl mb-4 transition-transform duration-300 ${
                    hoveredIndex === idx ? "scale-125 rotate-12" : ""
                  }`}
                >
                  {card.icon}
                </div>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </>
            )}
            {sectionId === "experience" && (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative  rounded-2xl transition-transform duration-300 hover:scale-105"
              >
                <div
                  className={`text-5xl mb-4 transition-transform rounded-full duration-300 ${
                    hoveredIndex === idx ? "scale-125 rotate-12" : ""
                  }`}
                >
                  <img
                    src={card.icon}
                    alt={`${card.title} ${card.icon}`}
                    className="w-14 h-14 object-cover rounded-full mb-4"
                  />
                </div>

                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-60 object-cover rounded-xl mb-4"
                  />
                  <div
                    className={`absolute inset-0 rounded-xl bg-black/70 backdrop-blur
                            p-4 transition-opacity duration-300 z-20
                            ${
                              hoveredIndex === idx
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                            }`}
                  >
                    {card.descSub && (
                      <ul className="space-y-1 text-sm text-gray-100 overflow-auto max-h-full">
                        {card.descSub.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <strong className="text-white">
                              {sub.project}:
                            </strong>{" "}
                            {sub.role}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="text-sm text-indigo-400 mb-2">{card.year}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-purple-300 mb-3">{card.company}</p>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            )}
            {sectionId === "projects" && (
              <>
                <div
                  className={`bg-gradient-to-br from-indigo-600 to-purple-600 h-32 sm:h-40 flex items-center justify-center text-5xl sm:text-6xl rounded-xl mb-4 transition-transform duration-300 ${
                    hoveredIndex === idx ? "rotate-3" : ""
                  }`}
                >
                  {card.img}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-indigo-400 text-xs sm:text-sm mb-3">
                  {card.tech}
                </p>
                <p className="text-gray-400 text-sm">{card.desc}</p>
                <button className="mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  {card.viewText || "View Project"} →
                </button>
              </>
            )}
            {sectionId === "contact" && (
              <Link
                href={card.link}
                target="_blank"
                className="group select-none flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] border rounded-full bg-slate-50 p-2 flex justify-center items-center shadow-md transition-all duration-500 group-hover:h-[130px] group-hover:shadow-lg ${
                    hoveredIndex === idx ? "scale-110 animate-bounce" : ""
                  }`}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>

                {/* title */}
                <h3 className="text-lg sm:text-xl font-bold mt-3 text-white">
                  {card.title}
                </h3>

                {/* info */}
                <p className="text-indigo-300 text-sm sm:text-base mt-1">
                  {card.info}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

SwiperCards.displayName = "SwiperCards";

// useThreeJS Hook
const useThreeJS = (canvasRef, profileImages, astronautFaceImage) => {
  const characterRef = useRef(null);
  const rocketRef = useRef(null);
  const astronautRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Photo Sphere
    const sphereGroup = new THREE.Group();
    const textureLoader = new THREE.TextureLoader();

    profileImages.forEach((imageUrl, index) => {
      const texture = textureLoader.load(imageUrl);
      const material = new THREE.MeshPhongMaterial({
        map: texture,
        shininess: 100,
        emissive: 0x4338ca,
        emissiveIntensity: 0.2,
      });
      const geometry = new THREE.PlaneGeometry(1.5, 1.5);
      const plane = new THREE.Mesh(geometry, material);
      const phi = Math.acos(-1 + (2 * index) / profileImages.length);
      const theta = Math.sqrt(profileImages.length * Math.PI) * phi;
      plane.position.setFromSphericalCoords(2, phi, theta);
      plane.lookAt(0, 0, 0);
      sphereGroup.add(plane);
    });

    scene.add(sphereGroup);
    characterRef.current = sphereGroup;

    const glowGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    sphereGroup.add(new THREE.Mesh(glowGeometry, glowMaterial));

    // Astronaut
    const astronautGroup = new THREE.Group();

    // Helmet
    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        shininess: 150,
      })
    );
    helmet.position.y = 1.5;
    astronautGroup.add(helmet);

    // Visor with Face Texture
    const faceTexture = textureLoader.load(
      astronautFaceImage || "/img/port3d/S__23248906_0.jpg"
    );

    const visor = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 32, 32, 0, Math.PI),
      new THREE.MeshPhongMaterial({
        map: faceTexture, // ใส่รูปหน้าที่นี่
        transparent: true,
        opacity: 0.95,
        shininess: 100,
        emissive: 0x4dd0e1,
        emissiveIntensity: 0.1,
      })
    );
    visor.position.set(0, 1.5, 0.25);
    visor.rotation.x = -Math.PI / 8;
    astronautGroup.add(visor);

    // Glass overlay for visor effect
    const glass = new THREE.Mesh(
      new THREE.SphereGeometry(0.46, 32, 32, 0, Math.PI),
      new THREE.MeshPhongMaterial({
        color: 0x4dd0e1,
        transparent: true,
        opacity: 0.3,
        shininess: 200,
      })
    );
    glass.position.set(0, 1.5, 0.26);
    glass.rotation.x = -Math.PI / 8;
    astronautGroup.add(glass);

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.5, 1.2, 16),
      new THREE.MeshPhongMaterial({ color: 0xeeeeee })
    );
    body.position.y = 0.6;
    astronautGroup.add(body);

    const backpack = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.8, 0.3),
      new THREE.MeshPhongMaterial({ color: 0xcccccc })
    );
    backpack.position.set(0, 0.7, -0.4);
    astronautGroup.add(backpack);

    const armGeometry = new THREE.CylinderGeometry(0.15, 0.12, 0.8, 8);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0xf5f5f5 });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 0.5, 0);
    leftArm.rotation.z = Math.PI / 6;
    astronautGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 0.5, 0);
    rightArm.rotation.z = -Math.PI / 6;
    astronautGroup.add(rightArm);

    const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.9, 8);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0xdddddd });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, -0.45, 0);
    astronautGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, -0.45, 0);
    astronautGroup.add(rightLeg);

    astronautGroup.position.set(4, 0, 0);
    astronautGroup.scale.set(1.2, 1.2, 1.2);
    scene.add(astronautGroup);
    astronautRef.current = astronautGroup;

    // Rocket (เหมือนเดิม)
    const rocketGroup = new THREE.Group();
    const rocketBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.35, 1.8, 16),
      new THREE.MeshPhongMaterial({ color: 0xf5f5f5, shininess: 120 })
    );
    rocketGroup.add(rocketBody);

    const stripe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 0.36, 0.3, 16),
      new THREE.MeshPhongMaterial({ color: 0xff4444 })
    );
    stripe.position.y = -0.3;
    rocketGroup.add(stripe);

    const nose = new THREE.Mesh(
      new THREE.ConeGeometry(0.25, 0.8, 16),
      new THREE.MeshPhongMaterial({ color: 0xff4444, shininess: 120 })
    );
    nose.position.y = 1.3;
    rocketGroup.add(nose);

    const photoTexture = textureLoader.load("");

    for (let i = 0; i < 3; i++) {
      const win = new THREE.Mesh(
        new THREE.CircleGeometry(0.14, 16),
        new THREE.MeshBasicMaterial({ map: photoTexture })
      );
      win.position.set(0, 0.5 - i * 0.4, 0.36);
      rocketGroup.add(win);
    }

    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.28, 0.9, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffa500,
        transparent: true,
        opacity: 0.9,
      })
    );
    flame.position.y = -1.35;
    rocketGroup.add(flame);

    const innerFlame = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.6, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.8,
      })
    );
    innerFlame.position.y = -1.25;
    rocketGroup.add(innerFlame);

    rocketGroup.position.set(-5, 0, 0);
    rocketGroup.rotation.z = -Math.PI / 4;
    scene.add(rocketGroup);
    rocketRef.current = rocketGroup;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const light1 = new THREE.PointLight(0x6366f1, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x8b5cf6, 1);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Stars
    const starsGeo = new THREE.BufferGeometry();
    const starsPos = new Float32Array(900);
    for (let i = 0; i < 900; i++) {
      starsPos[i] = (Math.random() - 0.5) * 40;
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(starsPos, 3));
    const stars = new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.08 })
    );
    scene.add(stars);

    // Animation
    let scrollY = 0;
    let time = 0;
    let flameScale = 1;
    let flameDir = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      const scrollProgress =
        scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);

      if (characterRef.current)
        characterRef.current.rotation.y = scrollProgress * Math.PI * 4;

      if (astronautRef.current) {
        astronautRef.current.position.y = Math.sin(time) * 0.2;
        astronautRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      }

      if (rocketRef.current) {
        const rocketProgress = scrollProgress * 5;
        rocketRef.current.position.y = -3 + rocketProgress * 8;
        rocketRef.current.position.x = -5 + Math.sin(rocketProgress * 2) * 2;
        flameScale += flameDir * 0.05;
        if (flameScale > 1.3 || flameScale < 0.7) flameDir *= -1;
        if (flame) flame.scale.y = flameScale;
        if (innerFlame) innerFlame.scale.y = flameScale * 1.2;
      }

      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [canvasRef, profileImages, astronautFaceImage]);

  return { characterRef, rocketRef, astronautRef };
};

// useParticles Hook
const useParticles = (canvasRef, activeSection) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const colors = {
      hero: { r: 99, g: 102, b: 241 },
      about: { r: 139, g: 92, b: 246 },
      experience: { r: 168, g: 85, b: 247 },
      projects: { r: 236, g: 72, b: 153 },
      contact: { r: 59, g: 130, b: 246 },
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x -= dx * force * 0.03;
          this.y -= dy * force * 0.03;
        }
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = colors[activeSection] || colors.hero;

      particles.forEach((p, i) => {
        p.update();
        p.draw(color);
        particles.slice(i + 1).forEach((op) => {
          const dx = p.x - op.x;
          const dy = p.y - op.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
              0.2 * (1 - dist / 120)
            })`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(op.x, op.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef, activeSection]);
};

// Main Component
const Portfolio3D = () => {
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const audioRef = useRef(null);
  const wooshSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set(["hero"]));
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");
  const lastScrollY = useRef(0);

  const content = useMemo(
    () => ({
      en: {
        nav: {
          home: "Home",
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact",
          resume: "Resume",
        },
        hero: {
          title: "Welcome",
          subtitle: "Creative Developer & Designer",
          desc: "Crafting beautiful digital experiences with code and creativity.",
          cta: "Explore My Work",
        },
        about: {
          title: "About Me",
          subtitle: "Who I Am / You can call me ' Time '",
          cards: [
            {
              title: "Education",
              desc: "Kasetsart Univ — B.Sc. Computer Science (Second-class honors), 2018–2022",
              icon: "🎓",
              img: "/img/port3d/S__23248905_0.jpg",
            },
            {
              title: "Frontend Dev",
              desc: "3+ years building fast, accessible UIs with React & Next.js",
              icon: "💻",
              img: "/img/port3d/S__23248907.jpg",
            },
            {
              title: "Creator Mindset",
              desc: "Creative thinker & problem solver crafting delightful UX",
              icon: "✨",
              img: "/img/port3d/S__23248898.jpg",
            },
            {
              title: "Always Learning",
              desc: "Exploring new tools, trends, and deep dives in React/frontend",
              icon: "📚",
              img: "/img/port3d/IMG_1644.jpg",
            },
            {
              title: "Thesis",
              desc: "“Duckling Learning E-learning” — research-driven building",
              icon: "🦆",
              img: "/img/port3d/IMG_1646.jpg",
            },
          ],
          hint: "Drag to see more",
        },
        experience: {
          title: "Experience",
          subtitle: "My Journey",
          cards: [
            {
              title: "Software Engineering Mid Front End",
              company: "7Solutions by nokplus",
              year: "Apr 2025 - Present",
              desc: "Front-End Developer | Next.js & React Native",
              icon: "/img/port3d/7solutions_co_ltd_logo.jpeg",
              img: "/img/port3d/S__23248910_0.jpg",
              descSub: [
                {
                  project: "Web Apps (Desktop/Mobile)",
                  role: "Developed responsive apps using Next.js and React Native.",
                },
                {
                  project: "Check-in Plus",
                  role: "Built Landing, Sign In/Up, Forgot Password, and User Profile pages.",
                },
                {
                  project: "Hotel Detail",
                  role: "Implemented hotel-side content presentation page.",
                },
                {
                  project: "i18n & Presets",
                  role: "Integrated multi-language support with custom presets.",
                },
                {
                  project: "Calendar Pricing",
                  role: "Built calendar-based pricing UI for dynamic hotel pricing.",
                },
                {
                  project: "Back Office (Mobile)",
                  role: "Collaborated on RN app for hotel owners to manage data on mobile.",
                },
              ],
            },
            {
              title: "Senior Software Engineering Front End",
              company: "The Able by King Power",
              year: "Jan 2025 - Apr 2025",
              desc: "Membership Platform — Responsive, Multi-language, Rewards",
              icon: "/img/port3d/the_able.webp",
              img: "/img/port3d/S__23248909_0.jpg",
              descSub: [
                {
                  project: "Membership Website",
                  role: "Developed & maintained responsive site (Desktop & Mobile).",
                },
                {
                  project: "Tier System",
                  role: "Designed and implemented tier-based member privileges.",
                },
                {
                  project: "Co-brand System",
                  role: "Built integrations for partners and bank credit cards.",
                },
                {
                  project: "Points & Wallet",
                  role: "Implemented point accumulation and wallet top-up features.",
                },
                {
                  project: "Privilege Redemption",
                  role: "Built rewards redemption using points.",
                },
                {
                  project: "Coupons",
                  role: "Developed coupon redemption & partner usage flows.",
                },
                {
                  project: "Tri-language",
                  role: "Supported Thai/English/Chinese for international users.",
                },
              ],
            },
            {
              title: "Software Developer Front-end",
              company: "Axons Corporate (CPF-IT)",
              year: "Apr 2022 - Dec 2024",
              desc: "React & .NET — Maintenance / Packhouse / Monitoring / Jr. to Sr. FE",
              icon: "/img/port3d/axons_logo.png",
              img: "/img/port3d/S__23248903_0.jpg",
              descSub: [
                {
                  project: "Frontend Dev",
                  role: "Built responsive React apps; state with Redux; MVVM separation.",
                },
                {
                  project: "Backend Dev",
                  role: "Developed .NET C# REST APIs; PostgreSQL; Kafka data pipelines.",
                },
                {
                  project: "Testing & QA",
                  role: "Unit tests for logic; Cypress for UI reliability.",
                },
                {
                  project: "Team Collaboration",
                  role: "Guided UI/UX feasibility; code reviews; best-practice sharing.",
                },
                {
                  project: "Agile",
                  role: "Planned & executed sprints; fast issue resolution.",
                },
                {
                  project: "Domain",
                  role: "Maintenance reporting, packhouse processes, and vehicle/product monitoring.",
                },
              ],
            },
            {
              title: "Intern — Fullstack Web Developer",
              company: "Kasetsart University — Computer Science",
              year: "2021 - 2022",
              desc: "End-to-end delivery: requirement → DB → UX/UI → Front+Back → QA → report",
              icon: "/img/ku.png",
              img: "/img/port3d/S__23248905_0.jpg",
              descSub: [
                {
                  project: "Requirement",
                  role: "Gathered and analyzed requirements with stakeholders.",
                },
                {
                  project: "Database Design",
                  role: "Designed schema & ERD aligning with system flows.",
                },
                {
                  project: "UX/UI",
                  role: "Prototyped user journeys and high-fidelity screens.",
                },
                {
                  project: "Coding",
                  role: "Implemented frontend & backend; integrated APIs.",
                },
                {
                  project: "QA & Report",
                  role: "Wrote test cases, fixed defects, and prepared documentation.",
                },
              ],
            },
          ],

          hint: "Swipe to explore",
        },
        projects: {
          title: "Projects",
          subtitle: "What I've Built",
          cards: [
            {
              title: "E-commerce",
              tech: "Next.js, Stripe",
              desc: "Online store",
              img: "🛍️",
              viewText: "View Project",
            },
            {
              title: "AI Dashboard",
              tech: "React, Python",
              desc: "Data visualization",
              img: "📊",
              viewText: "View Project",
            },
            {
              title: "Mobile App",
              tech: "React Native",
              desc: "iOS & Android",
              img: "📱",
              viewText: "View Project",
            },
            {
              title: "Portfolio",
              tech: "Three.js, Next.js",
              desc: "3D experience",
              img: "🎨",
              viewText: "View Project",
            },
          ],
          hint: "Drag to see all",
        },
        contact: {
          title: "Get In Touch",
          subtitle: "Let's Connect",
          cards: [
            {
              title: "GitHub",
              link: "https://github.com/krillato",
              icon: github,
              desc: "Explore my code and personal projects.",
            },
            {
              title: "CodeSandbox",
              link: "https://codesandbox.io/dashboard/sandboxes/?workspace=873b8007-54d2-4f38-811e-0a719395ee58",
              icon: codesandbox,
              desc: "Check out my live coding experiments and mini projects.",
            },
            {
              title: "LinkedIn",
              link: "https://www.linkedin.com/in/tammarat-chansamorn-3240b9227/",
              icon: linkin,
              desc: "Connect with me professionally and see my work history.",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/time._time/",
              icon: ig,
              desc: "Follow my daily life, travel, and creative moments.",
            },
          ],
          hint: "Click the icons to visit my profiles.",
        },
        resume: {
          title: "Download Resume",
          file: "/file/Tammarat_Chansamorn.pdf",
        },
      },
      th: {
        nav: {
          home: "หน้าแรก",
          about: "เกี่ยวกับ",
          experience: "ประสบการณ์",
          projects: "ผลงาน",
          contact: "ติดต่อ",
          resume: "เรซูเม่",
        },
        hero: {
          title: "ยินดีต้อนรับ",
          subtitle: "นักพัฒนาและนักออกแบบ",
          desc: "สร้างประสบการณ์ดิจิทัลที่สวยงาม",
          cta: "สำรวจผลงาน",
        },
        about: {
          title: "เกี่ยวกับฉัน",
          subtitle: "ฉันคือใคร / เรียกฉันว่า 'Time' ก็ได้",
          cards: [
            {
              title: "Education",
              desc: "มหาวิทยาลัยเกษตรศาสตร์ — วท.บ. วิทยาการคอมพิวเตอร์ เกียรตินิยม, 2018–2022",
              icon: "🎓",
              img: "/img/port3d/S__23248905_0.jpg",
            },
            {
              title: "Frontend Dev",
              desc: "ประสบการณ์กว่า 3 ปีในการสร้างเว็บไซต์ที่รวดเร็ว เข้าถึงง่าย และมีประสบการณ์ผู้ใช้ที่ดีด้วย React & Next.js",
              icon: "💻",
              img: "/img/port3d/S__23248907.jpg",
            },
            {
              title: "Creator Mindset",
              desc: "นักคิดสร้างสรรค์ที่มุ่งแก้ปัญหาและออกแบบ UX ที่ทำให้ผู้ใช้ประทับใจ",
              icon: "✨",
              img: "/img/port3d/S__23248898.jpg",
            },
            {
              title: "Always Learning",
              desc: "ชอบเรียนรู้สิ่งใหม่ ๆ ทั้งเครื่องมือ เทรนด์ และเทคนิคเชิงลึกในโลกของ React และ Frontend",
              icon: "📚",
              img: "/img/port3d/IMG_1644.jpg",
            },
            {
              title: "Thesis",
              desc: "“Duckling Learning E-learning” — ระบบการเรียนรู้ออนไลน์ที่พัฒนาจากงานวิจัยจริง",
              icon: "🦆",
              img: "/img/port3d/IMG_1646.jpg",
            },
          ],
          hint: "ลากเพื่อดูเพิ่มเติม",
        },

        experience: {
          title: "ประสบการณ์",
          subtitle: "เส้นทางการทำงาน",
          cards: [
            {
              title: "Software Engineering Mid Front End",
              company: "7Solutions by nokplus",
              year: "เมษายน 2025 - ปัจจุบัน",
              desc: "นักพัฒนา Front-End | Next.js & React Native",
              icon: "/img/port3d/7solutions_co_ltd_logo.jpeg",
              img: "/img/port3d/S__23248910_0.jpg",
              descSub: [
                {
                  project: "Web Apps (Desktop/Mobile)",
                  role: "พัฒนาเว็บแอปที่รองรับทั้ง Desktop และ Mobile ด้วย Next.js และ React Native",
                },
                {
                  project: "Check-in Plus",
                  role: "สร้างหน้า Landing, Sign In/Up, Forgot Password และ User Profile",
                },
                {
                  project: "Hotel Detail",
                  role: "พัฒนาหน้าแสดงรายละเอียดโรงแรมสำหรับฝั่งผู้ใช้งาน",
                },
                {
                  project: "i18n & Presets",
                  role: "เพิ่มระบบหลายภาษา (Multi-language) ด้วย i18n และ presets ที่ออกแบบเอง",
                },
                {
                  project: "Calendar Pricing",
                  role: "สร้างหน้าราคาห้องพักแบบปฏิทินสำหรับราคาที่เปลี่ยนแปลงได้",
                },
                {
                  project: "Back Office (Mobile)",
                  role: "ร่วมพัฒนาแอป React Native สำหรับเจ้าของโรงแรมจัดการข้อมูลผ่านมือถือ",
                },
              ],
            },
            {
              title: "Senior Software Engineering Front End",
              company: "The Able by King Power",
              year: "มกราคม 2025 - เมษายน 2025",
              desc: "Membership Platform — Responsive, Multi-language, Rewards",
              icon: "/img/port3d/the_able.webp",
              img: "/img/port3d/S__23248909_0.jpg",
              descSub: [
                {
                  project: "Membership Website",
                  role: "พัฒนาและดูแลเว็บไซต์สมาชิกที่รองรับทั้ง Desktop และ Mobile",
                },
                {
                  project: "Tier System",
                  role: "ออกแบบและพัฒนาระบบระดับสมาชิก (Tier-based Privileges)",
                },
                {
                  project: "Co-brand System",
                  role: "พัฒนาระบบร่วมกับพาร์ทเนอร์ เช่น ร้านค้า และธนาคาร (Co-brand)",
                },
                {
                  project: "Points & Wallet",
                  role: "สร้างระบบสะสมแต้ม และเติมเงินเข้ากระเป๋า (Wallet Top-up)",
                },
                {
                  project: "Privilege Redemption",
                  role: "พัฒนาระบบแลกสิทธิ์และของรางวัลโดยใช้แต้มสมาชิก",
                },
                {
                  project: "Coupons",
                  role: "พัฒนาระบบแลกคูปองและใช้งานคูปองกับร้านค้าพาร์ทเนอร์",
                },
                {
                  project: "Tri-language",
                  role: "รองรับสามภาษา (ไทย, อังกฤษ, จีน) เพื่อประสบการณ์ผู้ใช้ที่หลากหลาย",
                },
              ],
            },
            {
              title: "Software Developer Front-end",
              company: "Axons Corporate (CPF-IT)",
              year: "เมษายน 2022 - ธันวาคม 2024",
              desc: "React & .NET — Maintenance / Packhouse / Monitoring / Jr. to Sr. FE",
              icon: "/img/port3d/axons_logo.png",
              img: "/img/port3d/S__23248903_0.jpg",
              descSub: [
                {
                  project: "Frontend Dev",
                  role: "พัฒนาเว็บด้วย React รองรับ Responsive ใช้ Redux จัดการ state และออกแบบตาม MVVM",
                },
                {
                  project: "Backend Dev",
                  role: "พัฒนา REST API ด้วย .NET C#, จัดการฐานข้อมูล PostgreSQL และเชื่อมต่อ Kafka",
                },
                {
                  project: "Testing & QA",
                  role: "เขียน Unit Test สำหรับ logic และใช้ Cypress ทดสอบ UI เพื่อความเสถียรของระบบ",
                },
                {
                  project: "Team Collaboration",
                  role: "ให้คำแนะนำทีมออกแบบเรื่องความเป็นไปได้ของ UI/UX และรีวิวโค้ดทีมพัฒนา",
                },
                {
                  project: "Agile",
                  role: "ร่วมวางแผนและดำเนินการใน Sprint เพื่อให้งานส่งมอบได้อย่างรวดเร็ว",
                },
                {
                  project: "Domain",
                  role: "ทำระบบรายงานซ่อมบำรุง, ระบบจัดการโรงคัดบรรจุ และระบบติดตามรถขนส่งสินค้า",
                },
              ],
            },
            {
              title: "Intern — Fullstack Web Developer",
              company: "Kasetsart University — Computer Science",
              year: "2021 - 2022",
              desc: "ทำงานพัฒนาเว็บแบบครบวงจร ตั้งแต่ Requirement → Database → UX/UI → Coding → QA → รายงาน",
              icon: "/img/ku.png",
              img: "/img/port3d/S__23248905_0.jpg",
              descSub: [
                {
                  project: "Requirement",
                  role: "เก็บและวิเคราะห์ความต้องการของระบบจากผู้ใช้งาน",
                },
                {
                  project: "Database Design",
                  role: "ออกแบบฐานข้อมูลและ ER Diagram ให้ตรงกับ Flow ของระบบ",
                },
                {
                  project: "UX/UI",
                  role: "ออกแบบหน้าจอและ Prototype เพื่อให้เหมาะกับผู้ใช้งานจริง",
                },
                {
                  project: "Coding",
                  role: "พัฒนา Frontend และ Backend รวมถึงเชื่อมต่อ API",
                },
                {
                  project: "QA & Report",
                  role: "ทดสอบระบบ เขียน Test Case แก้บั๊ก และจัดทำเอกสารรายงานส่งอาจารย์",
                },
              ],
            },
          ],
          hint: "เลื่อนเพื่อสำรวจ",
        },

        projects: {
          title: "ผลงาน",
          subtitle: "สิ่งที่สร้าง",
          cards: [
            {
              title: "E-commerce",
              tech: "Next.js, Stripe",
              desc: "ร้านค้าออนไลน์",
              img: "🛍️",
              viewText: "ดูผลงาน",
            },
            {
              title: "แดชบอร์ด AI",
              tech: "React, Python",
              desc: "แสดงผลข้อมูล",
              img: "📊",
              viewText: "ดูผลงาน",
            },
            {
              title: "แอปมือถือ",
              tech: "React Native",
              desc: "iOS และ Android",
              img: "📱",
              viewText: "ดูผลงาน",
            },
            {
              title: "พอร์ตโฟลิโอ",
              tech: "Three.js, Next.js",
              desc: "ประสบการณ์ 3D",
              img: "🎨",
              viewText: "ดูผลงาน",
            },
          ],
          hint: "ลากเพื่อดูทั้งหมด",
        },
        contact: {
          title: "ติดต่อฉัน",
          subtitle: "มาคุยกัน",
          cards: [
            {
              title: "GitHub",
              link: "https://github.com/krillato",
              icon: github,
              desc: "Explore my code and personal projects.",
            },
            {
              title: "CodeSandbox",
              link: "https://codesandbox.io/dashboard/sandboxes/?workspace=873b8007-54d2-4f38-811e-0a719395ee58",
              icon: codesandbox,
              desc: "Check out my live coding experiments and mini projects.",
            },
            {
              title: "LinkedIn",
              link: "https://www.linkedin.com/in/tammarat-chansamorn-3240b9227/",
              icon: linkin,
              desc: "Connect with me professionally and see my work history.",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/time._time/",
              icon: ig,
              desc: "Follow my daily life, travel, and creative moments.",
            },
          ],
          hint: "กดที่ไอคอนเพื่อเยี่ยมชมโปรไฟล์ของฉัน",
        },
        resume: {
          title: "ดาวน์โหลด Resume",
          file: "/file/Tammarat_Chansamorn.pdf",
        },
      },
    }),
    []
  );

  const currentContent = content[language];

  const profileImages = useMemo(
    () => [
      "/img/port3d/S__23257092_0.jpg",
      "/img/port3d/S__23248911_0.jpg",
      "/img/port3d/S__23248905_0.jpg",
      "/img/port3d/S__23248909_0.jpg",
      "/img/port3d/S__23257093_0.jpg",
      "/img/port3d/S__23248903_0.jpg",
      "/img/port3d/S__23257092_0.jpg",
    ],
    []
  );

  const playSound = (soundRef) => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current
        .play()
        .catch((e) => console.log("Sound play failed:", e));
    }
  };

  useThreeJS(
    canvasRef,
    profileImages,
    "/img/port3d/S__23248906_0.jpg" // path รูปหน้านักบินอวกาศ
  );
  useParticles(particleCanvasRef, activeSection, {
    astronautFace: "/img/port3d/S__23248906_0.jpg",
  });

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        rafId = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
        playSound(wooshSoundRef);
        lastScrollY.current = currentScrollY;
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        lastScrollY.current = currentScrollY;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    playSound(clickSoundRef);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleMusic = () => {
    playSound(clickSoundRef);
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch((e) => console.log("Audio failed:", e));
    setIsPlaying(!isPlaying);
  };

  const toggleLanguage = () => {
    playSound(clickSoundRef);
    setLanguage((prev) => (prev === "en" ? "th" : "en"));
  };

  const toggleTheme = () => {
    playSound(clickSoundRef);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-950"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100"
      } text-white overflow-x-hidden transition-colors duration-500`}
    >
      <audio
        ref={wooshSoundRef}
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiDcIF2W77OWhUhELTqXh8bllHAU2jdXxy3ksBS16ye/bjUELGGOz6+2nWBQLRJzd8btjGwUmfczx2YY0BxlquOvkn1ISC0qh4O+1aB0FNInU8cx9MAUygdDv2Ik7CRdftOjqoFESC0iW3PG7YhsFJnrM8diINAcZaLXq5KFUEgtOo+Dvs2QcBjWH0fHLeC0FKnbF8N2RPw0bYrTq6qJVFAxJmuHwu2IfBSd5zPHYiTcIF2iz6+uiVRQLTJ/f77VlHQU0hdTy0YAwByp2x+/biUAKGGCz6+2nWRQLRp3d8bxkHwUneMzx2Ig2Bxdms+vno1UUC0+l4O+zYhoFNIvS8MyALgcpe8fv3YtBCxhgsOrsp1kVC0qg3+63YhwFJnfK8NuIMQgYZrTq5KJWFAtOnN/vt2UdBTSH0vDNfzAHK3vI8N2LQgsYXrLp66lYFApKod7vtWIcBSV1yPDdijEIF2Wz6+SiVhULTqDf7rdlHQU0h9Lwz38wByt7yPDeizIHF12y6eunWBQLSqHe77ViHAUldc/w3Ys0CBdks+vmoFMSC0+h3+63Zh0FNIfS8M9/MAcrfMjw3osxCBdds+rtp1gVC0uh3u62Yx0FJnXI8N+LNQcXZLLq5aJWEwtOod/ut2YdBTSI0/DPgC4HKnzJ8N6LMQYXW7Lp66hYFQpModzvtmQeBSd1yPDfiTQHF2S06uajVRQLTpzf7rdmHQUziNLwz4AvBSp+yPDeiTQHF1uy6eynWBUISpzc8LpjHwUndsrw34k0BxZhu+rmo1QUC06c3++3ZRwGM4fS8dF+LwUqfsjw34k0BxVZsunspVgVCEqc3PC6Yx8FJ3fK8N+KNQcWYbzq5qNUFAtPnN7vtmYdBTOH0vHRfi8FKn7I8N+KNQcVWbHp7KVYFQhKnNzwumQfBSd3yvDfijQHFl+76+ajVBQLUJvd77ZmHQUyh9Lx0X4vBSt+yPDfijQHFVmx6OylVxUISpzc8LpkHgUnecrx4Is0BxZfu+vmo1QUC0+b3u+2Zh0FMYXS8dF+LwYqfsrw4Is0BxVXsOjsplYVCEqb3PC7ZB8FJ3rK8OCLNQcVXrvq5aJUFAtOm93vtmYdBTGF0vHRfi4FKn7K8OCLNQcUV7Do7KZWFQhKm93wu2QfBSd6yvDfi"
        preload="auto"
      />
      <audio
        ref={clickSoundRef}
        src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="
        preload="auto"
      />
      <audio
        ref={audioRef}
        loop
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
      />

      <canvas
        ref={particleCanvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%) rotate(-45deg)",
        }}
      >
        <div className="text-3xl filter drop-shadow-lg">🚀</div>
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <button
          onClick={toggleMusic}
          className={`${
            theme === "dark"
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-orange-500 hover:bg-orange-600"
          } rounded-full p-4 transition-all shadow-lg pointer-events-auto hover:scale-110`}
        >
          <span className="text-2xl">{isPlaying ? "🔊" : "🔇"}</span>
        </button>
        <button
          onClick={toggleTheme}
          className={`${
            theme === "dark"
              ? "bg-yellow-600 hover:bg-yellow-700"
              : "bg-amber-600 hover:bg-amber-700"
          } rounded-full p-4 transition-all shadow-lg pointer-events-auto hover:scale-110`}
        >
          <span className="text-2xl">{theme === "dark" ? "☀️" : "🌙"}</span>
        </button>
        <button
          onClick={toggleLanguage}
          className={`${
            theme === "dark"
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-rose-500 hover:bg-rose-600"
          } rounded-full p-4 transition-all shadow-lg pointer-events-auto text-white font-bold hover:scale-110`}
        >
          <span className="text-sm">{language === "en" ? "TH" : "EN"}</span>
        </button>
      </div>

      <nav
        className={`fixed top-0 w-full ${
          theme === "dark" ? "bg-gray-900/80" : "bg-white/90"
        } backdrop-blur-md z-50 border-b ${
          theme === "dark" ? "border-gray-800" : "border-orange-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`text-xl sm:text-2xl font-bold ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "bg-gradient-to-r from-orange-500 to-rose-500"
              } bg-clip-text text-transparent cursor-pointer`}
            >
              ✨ Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "experience",
                "projects",
                "contact",
                "resume",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all ${
                    activeSection === section
                      ? theme === "dark"
                        ? "text-indigo-400 scale-110"
                        : "text-orange-600 scale-110"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {section === "hero"
                    ? `🏠 ${currentContent.nav.home}`
                    : currentContent.nav[section]}
                </button>
              ))}
            </div>

            <button
              className={`md:hidden ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              onClick={() => {
                playSound(clickSoundRef);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`${
                    theme === "dark" ? "bg-white" : "bg-gray-900"
                  } h-0.5 w-full transition-all ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`${
                    theme === "dark" ? "bg-white" : "bg-gray-900"
                  } h-0.5 w-full transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`${
                    theme === "dark" ? "bg-white" : "bg-gray-900"
                  } h-0.5 w-full transition-all ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } border-t ${
              theme === "dark" ? "border-gray-800" : "border-orange-200"
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {["hero", "about", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left capitalize ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    } py-2`}
                  >
                    {section === "hero"
                      ? `🏠 ${currentContent.nav.home}`
                      : currentContent.nav[section]}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10" style={{ cursor: "none" }}>
        {/* Welcome */}
        <section
          id="hero"
          className="h-screen flex items-center justify-center px-4"
        >
          <div className="text-center space-y-6 pt max-w-4xl ">
            <h1
              className={`text-5xl sm:text-7xl p-1 lg:text-8xl font-bold ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500"
              } bg-clip-text text-transparent animate-gradient`}
            >
              {currentContent.hero.title}✨
            </h1>
            <p
              className={`text-xl sm:text-2xl lg:text-3xl ${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              } fade-in-delay-1`}
            >
              {currentContent.hero.subtitle}
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-500" : "text-gray-700"
              } max-w-2xl mx-auto text-sm sm:text-base fade-in-delay-2`}
            >
              {currentContent.hero.desc}
            </p>
            <button
              onClick={() => {
                playSound(clickSoundRef);
                scrollToSection("about");
              }}
              className={`mt-8 px-6 sm:px-8 py-3 ${
                theme === "dark"
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600"
              } rounded-full transition-all hover:scale-110 hover:shadow-lg fade-in-delay-3 text-sm sm:text-base text-white`}
            >
              {currentContent.hero.cta} ✨
            </button>
          </div>
        </section>
        {/* About Me */}
        <section
          id="about"
          className="min-h-screen flex items-center py-12 sm:py-20 px-4"
        >
          <div
            className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {currentContent.about.title} 🎨
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                } text-base sm:text-lg`}
              >
                {currentContent.about.subtitle}
              </p>
            </div>
            <SwiperCards cards={currentContent.about.cards} sectionId="about" />
            <div
              className={`text-center mt-6 ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              } text-xs sm:text-sm`}
            >
              👆 {currentContent.about.hint}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`min-h-screen flex items-center py-12 sm:py-20 px-4 ${
            theme === "dark" ? "bg-gray-900/30" : "bg-white/50"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
              visibleSections.has("experience")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {currentContent.experience.title} 💼
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                } text-base sm:text-lg`}
              >
                {currentContent.experience.subtitle}
              </p>
            </div>
            <SwiperCards
              cards={currentContent.experience.cards}
              sectionId="experience"
            />
            <div
              className={`text-center mt-6 ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              } text-xs sm:text-sm`}
            >
              👆 {currentContent.experience.hint}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center py-12 sm:py-20 px-4"
        >
          <div
            className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
              visibleSections.has("projects")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {currentContent.projects.title} 🚀
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                } text-base sm:text-lg`}
              >
                {currentContent.projects.subtitle}
              </p>
            </div>
            <SwiperCards
              cards={currentContent.projects.cards}
              sectionId="projects"
            />
            <div
              className={`text-center mt-6 ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              } text-xs sm:text-sm`}
            >
              👆 {currentContent.projects.hint}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`min-h-screen flex items-center py-12 sm:py-20 px-4 ${
            theme === "dark" ? "bg-gray-900/30" : "bg-white/50"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
              visibleSections.has("contact")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {currentContent.contact.title} 📬
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                } text-base sm:text-lg`}
              >
                {currentContent.contact.subtitle}
              </p>
            </div>
            <SwiperCards
              cards={currentContent.contact.cards}
              sectionId="contact"
            />
          </div>
        </section>

        <section
          id="resume"
          className={`min-h-screen flex items-center py-12 sm:py-20 px-4 ${
            theme === "dark" ? "bg-gray-900/30" : "bg-white/50"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto w-full transition-all duration-1000 `}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {currentContent.resume.title} 📄
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                } text-base sm:text-lg`}
              >
                {currentContent.contact?.subtitle ?? " "}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link
                href={currentContent.resume.file}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                   bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95
                   transition-all duration-200 shadow-md"
              >
                <span>View Online</span>
                <span aria-hidden>🌐</span>
              </Link>

              <a
                href={currentContent.resume.file}
                download
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                    ${
                      theme === "dark"
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }
                    active:scale-95 transition-all duration-200 shadow-sm`}
              >
                <span>Download PDF</span>
                <span aria-hidden>⬇️</span>
              </a>
            </div>

            {/* <div className="mt-6 text-center">
              <Link
                href={currentContent.resume.file}
                locale={false}
                target="_blank"
                className="underline text-indigo-400"
              >
                {currentContent.resume.file}
              </Link>
            </div> */}
          </div>
        </section>

        <footer
          className={`py-6 sm:py-8 text-center ${
            theme === "dark"
              ? "text-gray-500 border-gray-800"
              : "text-gray-600 border-orange-200"
          } border-t text-xs sm:text-sm`}
        >
          <p>© 2025 Portfolio. Tammarat Chanamorn ✨</p>
        </footer>
      </div>

      <style jsx>{`
        * {
          cursor: none !important;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .fade-in-delay-3 {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Portfolio3D;
