import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react"
import * as THREE from 'three'

function StartMoving() {
  const ref = useRef<THREE.Points>(null!);

  const starRun = useMemo(() => {
    const positionStar: number[] = []
    for (let i = 0; i < 1500; i++) {
      const r = Math.cbrt(Math.random()) * 1500;
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      positionStar.push(x, y, z);
    }
    return new Float32Array(positionStar);
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[starRun, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={'white'}
        size={1}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

function ShootingStar() {
  const ref = useRef<THREE.Points>(null!);

  const positionStar = useMemo(
    () => new THREE.Vector3(Math.random() * 400 - 200, Math.random() * 400 - 200), []
  )

  const speedStar = useMemo(() => new THREE.Vector3(-2 - Math.random(), -1 - Math.random(), 2), []);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.add(speedStar);
      if (ref.current.position.x < -300 || ref.current.position.x > -200) {
        ref.current.position.set(
          Math.random() * 400 - 200,
          Math.random() * 400,
          -200
        );
      }
    }
  });
  return (
    <mesh ref={ref} position={positionStar}>
      <sphereGeometry args={[1.5, 8.8]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}

const StarBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 500] }}>
      <StartMoving />
      <ShootingStar/>
      <ShootingStar/>
      <ShootingStar/>
    </Canvas>
  )
}

export default StarBackground