import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
		"auth0",
		"node",
		"mongodb",
		"next",
		"css3",
		"typescript",
		"kubernetes",
		"git",
		"html5",
		"javascript",
		"microsoft",
		"react",
		"docker",
		"tailwindcss",
		"vitejs",
		"express",
		"graphql",
		"firebase",
		"python",
    "redis",
    "postgress",
	];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
