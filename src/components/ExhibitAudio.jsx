import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ExhibitAudio() {
  const sound = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const audio = new THREE.PositionalAudio(listener);
    sound.current = audio;

    const loader = new THREE.AudioLoader();

    loader.load("/sounds/battlefield.mp3", (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.3);
      audio.setRefDistance(5);
      audio.play();
    });

    return () => {
      audio.stop();
      camera.remove(listener);
    };
  }, [camera]);

  return null;
}