import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

type GLTFResult = GLTF & {
    nodes: {
        primitive_color: THREE.Mesh
        primitive_color_1: THREE.Mesh
        primitive_color_2: THREE.Mesh
        primitive_color_3: THREE.Mesh
        primitive_color_4: THREE.Mesh
        primitive_color_5: THREE.Mesh
        primitive_color_6: THREE.Mesh
        primitive_color_7: THREE.Mesh
        primitive_color_8: THREE.Mesh
        primitive_color_9: THREE.Mesh
        primitive_color_10: THREE.Mesh
        primitive_color_11: THREE.Mesh
        primitive_color_12: THREE.Mesh
        primitive_color_13: THREE.Mesh
        primitive_color_14: THREE.Mesh
        primitive_color_15: THREE.Mesh
        primitive_color_16: THREE.Mesh
        primitive_color_17: THREE.Mesh
        primitive_color_18: THREE.Mesh
        primitive_color_19: THREE.Mesh
        primitive_color_20: THREE.Mesh
        primitive_color_21: THREE.Mesh
        primitive_color_22: THREE.Mesh
        primitive_color_23: THREE.Mesh
        primitive_color_24: THREE.Mesh
        primitive_color_25: THREE.Mesh
        primitive_color_26: THREE.Mesh
        primitive_color_27: THREE.Mesh
        primitive_color_28: THREE.Mesh
        primitive_color_29: THREE.Mesh
        primitive_color_30: THREE.Mesh
        primitive_color_31: THREE.Mesh
        primitive_color_32: THREE.Mesh
        primitive_color_33: THREE.Mesh
        primitive_color_34: THREE.Mesh
        primitive_color_35: THREE.Mesh
        primitive_color_36: THREE.Mesh
        primitive_color_37: THREE.Mesh
        primitive_color_38: THREE.Mesh
        primitive_color_39: THREE.Mesh
        primitive_color_40: THREE.Mesh
        primitive_color_41: THREE.Mesh
        primitive_color_42: THREE.Mesh
        primitive_color_43: THREE.Mesh
        primitive_color_44: THREE.Mesh
        primitive_color_45: THREE.Mesh
        primitive_color_46: THREE.Mesh
        primitive_color_47: THREE.Mesh
        primitive_color_48: THREE.Mesh
        primitive_color_49: THREE.Mesh
        primitive_color_50: THREE.Mesh
        primitive_color_51: THREE.Mesh
        primitive_color_52: THREE.Mesh
        primitive_color_53: THREE.Mesh
        primitive_color_54: THREE.Mesh
        primitive_color_55: THREE.Mesh
        primitive_color_56: THREE.Mesh
        primitive_color_57: THREE.Mesh
        primitive_color_58: THREE.Mesh
        primitive_color_59: THREE.Mesh
        primitive_color_60: THREE.Mesh
        primitive_color_61: THREE.Mesh
        primitive_color_62: THREE.Mesh
        primitive_color_63: THREE.Mesh
        primitive_color_64: THREE.Mesh
        primitive_color_65: THREE.Mesh
        primitive_color_66: THREE.Mesh
        primitive_color_67: THREE.Mesh
        primitive_color_68: THREE.Mesh
        primitive_color_69: THREE.Mesh
        primitive_color_70: THREE.Mesh
        primitive_color_71: THREE.Mesh
        primitive_color_72: THREE.Mesh
        primitive_color_73: THREE.Mesh
        primitive_color_74: THREE.Mesh
        primitive_color_75: THREE.Mesh
        primitive_color_76: THREE.Mesh
        primitive_color_77: THREE.Mesh
        primitive_color_78: THREE.Mesh
        primitive_color_79: THREE.Mesh
        primitive_color_80: THREE.Mesh
        primitive_color_81: THREE.Mesh
        primitive_color_82: THREE.Mesh
        primitive_color_83: THREE.Mesh
        primitive_color_84: THREE.Mesh
        primitive_color_85: THREE.Mesh
        primitive_color_86: THREE.Mesh
        primitive_color_87: THREE.Mesh
        primitive_color_88: THREE.Mesh
        primitive_color_89: THREE.Mesh
        primitive_color_90: THREE.Mesh
        primitive_color_91: THREE.Mesh
        primitive_color_92: THREE.Mesh
        primitive_color_93: THREE.Mesh
        primitive_color_94: THREE.Mesh
        primitive_color_95: THREE.Mesh
        primitive_color_96: THREE.Mesh
        primitive_color_97: THREE.Mesh
        primitive_color_98: THREE.Mesh
        primitive_color_99: THREE.Mesh
        primitive_color_100: THREE.Mesh
        primitive_color_101: THREE.Mesh
        primitive_color_102: THREE.Mesh
        primitive_color_103: THREE.Mesh
        primitive_color_104: THREE.Mesh
        primitive_color_105: THREE.Mesh
        primitive_color_106: THREE.Mesh
        primitive_color_107: THREE.Mesh
        primitive_color_108: THREE.Mesh
        primitive_color_109: THREE.Mesh
        primitive_color_110: THREE.Mesh
        primitive_color_111: THREE.Mesh
        primitive_color_112: THREE.Mesh
        primitive_color_113: THREE.Mesh
        primitive_color_114: THREE.Mesh
        primitive_color_115: THREE.Mesh
        primitive_color_116: THREE.Mesh
        primitive_color_117: THREE.Mesh
        primitive_color_118: THREE.Mesh
        primitive_color_119: THREE.Mesh
        primitive_color_120: THREE.Mesh
        primitive_color_121: THREE.Mesh
        primitive_color_122: THREE.Mesh
        primitive_color_123: THREE.Mesh
        primitive_color_124: THREE.Mesh
        primitive_color_125: THREE.Mesh
        primitive_color_126: THREE.Mesh
    }
    materials: {
        material_1: THREE.MeshStandardMaterial
        material_2: THREE.MeshStandardMaterial
        material_0: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/sucrose/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[1.31, 0.79, 1.99]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color.geometry} material={nodes.primitive_color.material} />
                    </group>
                    <group position={[0.69, -0.13, -0.1]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_1.geometry} material={nodes.primitive_color_1.material} />
                    </group>
                    <group position={[-1.42, 0.16, -1.01]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_2.geometry} material={nodes.primitive_color_2.material} />
                    </group>
                    <group position={[3.22, 0.47, -0.97]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_3.geometry} material={nodes.primitive_color_3.material} />
                    </group>
                    <group position={[4, 2.43, 1.78]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_4.geometry} material={nodes.primitive_color_4.material} />
                    </group>
                    <group position={[-0.6, -2.65, -0.5]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_5.geometry} material={nodes.primitive_color_5.material} />
                    </group>
                    <group position={[-3.24, -1.36, 1.69]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_6.geometry} material={nodes.primitive_color_6.material} />
                    </group>
                    <group position={[-3.09, -2.15, -1.9]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_7.geometry} material={nodes.primitive_color_7.material} />
                    </group>
                    <group position={[1.34, -1.86, 2.67]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_8.geometry} material={nodes.primitive_color_8.material} />
                    </group>
                    <group position={[0.78, 4.24, 0.62]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_9.geometry} material={nodes.primitive_color_9.material} />
                    </group>
                    <group position={[-3.08, 2.51, -0.52]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_10.geometry} material={nodes.primitive_color_10.material} />
                    </group>
                    <group position={[1.71, -0.1, 0.93]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_11.geometry} material={nodes.primitive_color_11.material} />
                    </group>
                    <group position={[3.01, 0.6, 0.43]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_12.geometry} material={nodes.primitive_color_12.material} />
                    </group>
                    <group position={[2.93, 2.07, 0.9]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_13.geometry} material={nodes.primitive_color_13.material} />
                    </group>
                    <group position={[1.59, 2.15, 1.65]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_14.geometry} material={nodes.primitive_color_14.material} />
                    </group>
                    <group position={[-0.73, -0.32, 0.17]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_15.geometry} material={nodes.primitive_color_15.material} />
                    </group>
                    <group position={[-1.17, -1.78, 0.47]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_16.geometry} material={nodes.primitive_color_16.material} />
                    </group>
                    <group position={[-2.71, -1.94, 0.5]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_17.geometry} material={nodes.primitive_color_17.material} />
                    </group>
                    <group position={[-3.38, -1.33, -0.77]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_18.geometry} material={nodes.primitive_color_18.material} />
                    </group>
                    <group position={[-2.87, 0.12, -1.04]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_19.geometry} material={nodes.primitive_color_19.material} />
                    </group>
                    <group position={[2.01, -1.55, 1.45]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_20.geometry} material={nodes.primitive_color_20.material} />
                    </group>
                    <group position={[0.45, 2.88, 0.88]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_21.geometry} material={nodes.primitive_color_21.material} />
                    </group>
                    <group position={[-3.54, 1.21, -0.17]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_22.geometry} material={nodes.primitive_color_22.material} />
                    </group>
                    <group position={[3.91, 0.18, 0.89]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_23.geometry} material={nodes.primitive_color_23.material} />
                    </group>
                    <group position={[2.99, 2.76, 0.05]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_24.geometry} material={nodes.primitive_color_24.material} />
                    </group>
                    <group position={[1.7, 2.69, 2.59]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_25.geometry} material={nodes.primitive_color_25.material} />
                    </group>
                    <group position={[-1.02, 0.32, 1]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_26.geometry} material={nodes.primitive_color_26.material} />
                    </group>
                    <group position={[-0.8, -2.08, 1.45]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_27.geometry} material={nodes.primitive_color_27.material} />
                    </group>
                    <group position={[-2.96, -3, 0.56]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_28.geometry} material={nodes.primitive_color_28.material} />
                    </group>
                    <group position={[-4.47, -1.34, -0.66]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_29.geometry} material={nodes.primitive_color_29.material} />
                    </group>
                    <group position={[-3.15, 0.36, -2.07]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_30.geometry} material={nodes.primitive_color_30.material} />
                    </group>
                    <group position={[1.74, -2.29, 0.69]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_31.geometry} material={nodes.primitive_color_31.material} />
                    </group>
                    <group position={[3.06, -1.73, 1.67]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_32.geometry} material={nodes.primitive_color_32.material} />
                    </group>
                    <group position={[-0.46, 2.87, 1.48]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_33.geometry} material={nodes.primitive_color_33.material} />
                    </group>
                    <group position={[0.25, 2.41, -0.08]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_34.geometry} material={nodes.primitive_color_34.material} />
                    </group>
                    <group position={[-4.62, 1.19, -0.31]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_35.geometry} material={nodes.primitive_color_35.material} />
                    </group>
                    <group position={[-3.33, 1.07, 0.89]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_36.geometry} material={nodes.primitive_color_36.material} />
                    </group>
                    <group position={[3.34, -0.5, -1.12]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_37.geometry} material={nodes.primitive_color_37.material} />
                    </group>
                    <group position={[4.83, 2.31, 1.27]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_38.geometry} material={nodes.primitive_color_38.material} />
                    </group>
                    <group position={[-0.87, -3.55, -0.22]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_39.geometry} material={nodes.primitive_color_39.material} />
                    </group>
                    <group position={[-4.21, -1.52, 1.66]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_40.geometry} material={nodes.primitive_color_40.material} />
                    </group>
                    <group position={[-3.46, -3.04, -1.68]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_41.geometry} material={nodes.primitive_color_41.material} />
                    </group>
                    <group position={[1.6, -2.78, 2.87]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_42.geometry} material={nodes.primitive_color_42.material} />
                    </group>
                    <group position={[0.02, 4.59, 0.1]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_43.geometry} material={nodes.primitive_color_43.material} />
                    </group>
                    <group position={[-3.55, 3.11, 0.09]} rotation={[0.09, 1.13, -0.65]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_44.geometry} material={nodes.primitive_color_44.material} />
                    </group>
                    <group position={[1.41, 0.58, 1.74]} rotation={[-2.09, 0.56, -0.33]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_45.geometry} material={nodes.primitive_color_45.material} />
                    </group>
                    <group position={[1.6, 0.13, 1.22]} rotation={[0.84, 0.13, 0.28]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_46.geometry} material={nodes.primitive_color_46.material} />
                    </group>
                    <group position={[1.38, 1.11, 1.91]} rotation={[-0.24, 0.02, -0.19]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_47.geometry} material={nodes.primitive_color_47.material} />
                    </group>
                    <group position={[1.51, 1.79, 1.74]} rotation={[2.26, 1.25, 0.65]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_48.geometry} material={nodes.primitive_color_48.material} />
                    </group>
                    <group position={[1.44, -0.11, 0.66]} rotation={[-0.98, -0.53, 0.95]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_49.geometry} material={nodes.primitive_color_49.material} />
                    </group>
                    <group position={[0.93, -0.12, 0.14]} rotation={[0.96, -0.51, -0.94]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_50.geometry} material={nodes.primitive_color_50.material} />
                    </group>
                    <group position={[-0.35, -0.27, 0.09]} rotation={[-0.19, 0.16, -1.41]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_51.geometry} material={nodes.primitive_color_51.material} />
                    </group>
                    <group position={[0.35, -0.17, -0.04]} rotation={[0.19, 0.21, 1.66]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_52.geometry} material={nodes.primitive_color_52.material} />
                    </group>
                    <group position={[-1.26, 0.05, -0.74]} rotation={[1.56, -0.62, -0.63]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_53.geometry} material={nodes.primitive_color_53.material} />
                    </group>
                    <group position={[-0.91, -0.19, -0.15]} rotation={[-1.02, -0.3, 0.52]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_54.geometry} material={nodes.primitive_color_54.material} />
                    </group>
                    <group position={[-1.76, 0.15, -1.02]} rotation={[-0.02, -0.02, 1.6]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_55.geometry} material={nodes.primitive_color_55.material} />
                    </group>
                    <group position={[-2.48, 0.13, -1.04]} rotation={[0.02, -0.02, -1.54]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_56.geometry} material={nodes.primitive_color_56.material} />
                    </group>
                    <group position={[3.07, 0.56, 0.06]} rotation={[-1.64, 0.16, -0.15]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_57.geometry} material={nodes.primitive_color_57.material} />
                    </group>
                    <group position={[3.17, 0.5, -0.64]} rotation={[1.46, 0.13, 0.15]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_58.geometry} material={nodes.primitive_color_58.material} />
                    </group>
                    <group position={[3.25, 0.18, -1.01]} rotation={[-2.54, 1.3, -0.46]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_59.geometry} material={nodes.primitive_color_59.material} />
                    </group>
                    <group position={[3.31, -0.3, -1.09]} rotation={[0.15, 0.01, 0.12]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_60.geometry} material={nodes.primitive_color_60.material} />
                    </group>
                    <group position={[3.22, 2.17, 1.13]} rotation={[0.73, -0.38, -0.93]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_61.geometry} material={nodes.primitive_color_61.material} />
                    </group>
                    <group position={[3.75, 2.34, 1.58]} rotation={[-0.9, -0.66, 1.23]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_62.geometry} material={nodes.primitive_color_62.material} />
                    </group>
                    <group position={[4.25, 2.39, 1.63]} rotation={[-0.65, 0.53, -1.35]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_63.geometry} material={nodes.primitive_color_63.material} />
                    </group>
                    <group position={[4.66, 2.33, 1.37]} rotation={[0.6, 0.4, 1.16]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_64.geometry} material={nodes.primitive_color_64.material} />
                    </group>
                    <group position={[-1.02, -2.01, 0.21]} rotation={[-1.85, 0.79, -0.6]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_65.geometry} material={nodes.primitive_color_65.material} />
                    </group>
                    <group position={[-0.73, -2.45, -0.27]} rotation={[0.76, 0.17, 0.42]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_66.geometry} material={nodes.primitive_color_66.material} />
                    </group>
                    <group position={[-0.68, -2.92, -0.41]} rotation={[1.45, 1.28, 1.4]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_67.geometry} material={nodes.primitive_color_67.material} />
                    </group>
                    <group position={[-0.82, -3.37, -0.28]} rotation={[-0.29, 0.04, -0.28]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_68.geometry} material={nodes.primitive_color_68.material} />
                    </group>
                    <group position={[-2.86, -1.79, 0.81]} rotation={[1.03, 0.22, 0.39]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_69.geometry} material={nodes.primitive_color_69.material} />
                    </group>
                    <group position={[-3.12, -1.5, 1.41]} rotation={[-1.78, 0.55, -0.45]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_70.geometry} material={nodes.primitive_color_70.material} />
                    </group>
                    <group position={[-3.53, -1.41, 1.68]} rotation={[-0.04, -0.04, 1.73]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_71.geometry} material={nodes.primitive_color_71.material} />
                    </group>
                    <group position={[-4.02, -1.49, 1.66]} rotation={[0.04, -0.03, -1.41]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_72.geometry} material={nodes.primitive_color_72.material} />
                    </group>
                    <group position={[-3.3, -1.55, -1.07]} rotation={[-2.12, 0.38, -0.22]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_73.geometry} material={nodes.primitive_color_73.material} />
                    </group>
                    <group position={[-3.16, -1.96, -1.63]} rotation={[0.92, 0.1, 0.2]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_74.geometry} material={nodes.primitive_color_74.material} />
                    </group>
                    <group position={[-3.2, -2.42, -1.84]} rotation={[0.41, 0.99, 2.4]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_75.geometry} material={nodes.primitive_color_75.material} />
                    </group>
                    <group position={[-3.39, -2.86, -1.73]} rotation={[-0.22, 0.04, -0.38]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_76.geometry} material={nodes.primitive_color_76.material} />
                    </group>
                    <group position={[1.5, -1.79, 2.38]} rotation={[-1.14, 0.34, -0.52]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_77.geometry} material={nodes.primitive_color_77.material} />
                    </group>
                    <group position={[1.83, -1.63, 1.77]} rotation={[1.5, 0.54, 0.58]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_78.geometry} material={nodes.primitive_color_78.material} />
                    </group>
                    <group position={[1.42, -2.14, 2.73]} rotation={[0.66, -1.23, -2.24]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_79.geometry} material={nodes.primitive_color_79.material} />
                    </group>
                    <group position={[1.54, -2.6, 2.83]} rotation={[-0.21, -0.03, 0.26]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_80.geometry} material={nodes.primitive_color_80.material} />
                    </group>
                    <group position={[0.71, 3.92, 0.68]} rotation={[0.68, 1.27, 2.24]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_81.geometry} material={nodes.primitive_color_81.material} />
                    </group>
                    <group position={[0.54, 3.24, 0.81]} rotation={[-0.19, 0.02, -0.24]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_82.geometry} material={nodes.primitive_color_82.material} />
                    </group>
                    <group position={[0.56, 4.35, 0.46]} rotation={[-0.58, -0.3, 0.95]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_83.geometry} material={nodes.primitive_color_83.material} />
                    </group>
                    <group position={[0.18, 4.52, 0.21]} rotation={[0.74, -0.68, -1.48]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_84.geometry} material={nodes.primitive_color_84.material} />
                    </group>
                    <group position={[-3.18, 2.2, -0.44]} rotation={[0.68, 1.17, 2.16]} scale={[0.2, 0.33, 0.2]}>
                        <mesh geometry={nodes.primitive_color_85.geometry} material={nodes.primitive_color_85.material} />
                    </group>
                    <group position={[-3.42, 1.56, -0.27]} rotation={[-0.25, 0.04, -0.33]} scale={[0.2, 0.38, 0.2]}>
                        <mesh geometry={nodes.primitive_color_86.geometry} material={nodes.primitive_color_86.material} />
                    </group>
                    <group position={[-3.22, 2.69, -0.34]} rotation={[0.68, 0.19, 0.52]} scale={[0.2, 0.29, 0.2]}>
                        <mesh geometry={nodes.primitive_color_87.geometry} material={nodes.primitive_color_87.material} />
                    </group>
                    <group position={[-3.46, 2.99, -0.04]} rotation={[-1.58, 0.9, -0.89]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_88.geometry} material={nodes.primitive_color_88.material} />
                    </group>
                    <group position={[2.36, 0.25, 0.68]} rotation={[-0.33, 0.18, -1.01]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_89.geometry} material={nodes.primitive_color_89.material} />
                    </group>
                    <group position={[1.86, -0.83, 1.19]} rotation={[2.5, -0.99, -0.36]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_90.geometry} material={nodes.primitive_color_90.material} />
                    </group>
                    <group position={[2.97, 1.33, 0.67]} rotation={[0.3, 0.01, 0.05]} scale={[0.2, 0.77, 0.2]}>
                        <mesh geometry={nodes.primitive_color_91.geometry} material={nodes.primitive_color_91.material} />
                    </group>
                    <group position={[3.29, 0.47, 0.58]} rotation={[0.53, -0.59, -1.7]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_92.geometry} material={nodes.primitive_color_92.material} />
                    </group>
                    <group position={[3.74, 0.25, 0.81]} rotation={[-0.44, -0.25, 1.01]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_93.geometry} material={nodes.primitive_color_93.material} />
                    </group>
                    <group position={[2.26, 2.11, 1.27]} rotation={[0.56, 0.41, 1.26]} scale={[0.2, 0.77, 0.2]}>
                        <mesh geometry={nodes.primitive_color_94.geometry} material={nodes.primitive_color_94.material} />
                    </group>
                    <group position={[2.95, 2.29, 0.63]} rotation={[-0.89, 0.02, -0.05]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_95.geometry} material={nodes.primitive_color_95.material} />
                    </group>
                    <group position={[2.98, 2.63, 0.21]} rotation={[2.25, 0.1, 0.05]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_96.geometry} material={nodes.primitive_color_96.material} />
                    </group>
                    <group position={[1.02, 2.52, 1.26]} rotation={[-0.53, -0.25, 0.86]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_97.geometry} material={nodes.primitive_color_97.material} />
                    </group>
                    <group position={[1.62, 2.32, 1.95]} rotation={[1.05, -0.06, -0.1]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_98.geometry} material={nodes.primitive_color_98.material} />
                    </group>
                    <group position={[1.68, 2.59, 2.42]} rotation={[-2.06, -0.18, 0.11]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_99.geometry} material={nodes.primitive_color_99.material} />
                    </group>
                    <group position={[-0.95, -1.05, 0.32]} rotation={[0.48, 1.13, 2.4]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_100.geometry} material={nodes.primitive_color_100.material} />
                    </group>
                    <group position={[-0.82, -0.12, 0.43]} rotation={[0.88, 0.13, 0.27]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_101.geometry} material={nodes.primitive_color_101.material} />
                    </group>
                    <group position={[-0.96, 0.21, 0.85]} rotation={[-2.07, 0.51, -0.31]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_102.geometry} material={nodes.primitive_color_102.material} />
                    </group>
                    <group position={[-1.94, -1.86, 0.48]} rotation={[0.02, 0.02, 1.68]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_103.geometry} material={nodes.primitive_color_103.material} />
                    </group>
                    <group position={[-1.06, -1.87, 0.78]} rotation={[1.7, -0.44, -0.38]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_104.geometry} material={nodes.primitive_color_104.material} />
                    </group>
                    <group position={[-0.87, -2.02, 1.27]} rotation={[-1.18, -0.24, 0.36]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_105.geometry} material={nodes.primitive_color_105.material} />
                    </group>
                    <group position={[-3.05, -1.64, -0.13]} rotation={[-1, -0.25, 0.46]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_106.geometry} material={nodes.primitive_color_106.material} />
                    </group>
                    <group position={[-2.79, -2.28, 0.52]} rotation={[0.07, 0.51, 2.88]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_107.geometry} material={nodes.primitive_color_107.material} />
                    </group>
                    <group position={[-2.92, -2.81, 0.55]} rotation={[-0.06, 0.01, -0.23]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_108.geometry} material={nodes.primitive_color_108.material} />
                    </group>
                    <group position={[-3.12, -0.61, -0.9]} rotation={[-0.18, 0.03, -0.33]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_109.geometry} material={nodes.primitive_color_109.material} />
                    </group>
                    <group position={[-3.72, -1.34, -0.73]} rotation={[0.1, 0.1, 1.57]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_110.geometry} material={nodes.primitive_color_110.material} />
                    </group>
                    <group position={[-4.26, -1.34, -0.68]} rotation={[-0.1, 0.1, -1.55]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_111.geometry} material={nodes.primitive_color_111.material} />
                    </group>
                    <group position={[-3.2, 0.66, -0.61]} rotation={[0.6, 0.14, 0.45]} scale={[0.2, 0.78, 0.2]}>
                        <mesh geometry={nodes.primitive_color_112.geometry} material={nodes.primitive_color_112.material} />
                    </group>
                    <group position={[-2.95, 0.19, -1.37]} rotation={[-1.28, -0.2, 0.26]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_113.geometry} material={nodes.primitive_color_113.material} />
                    </group>
                    <group position={[-3.09, 0.32, -1.88]} rotation={[1.72, -0.32, -0.27]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_114.geometry} material={nodes.primitive_color_114.material} />
                    </group>
                    <group position={[1.92, -1.78, 1.21]} rotation={[-2.19, -0.56, 0.29]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_115.geometry} material={nodes.primitive_color_115.material} />
                    </group>
                    <group position={[1.79, -2.15, 0.83]} rotation={[0.77, -0.1, -0.25]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_116.geometry} material={nodes.primitive_color_116.material} />
                    </group>
                    <group position={[2.34, -1.61, 1.52]} rotation={[0.21, -0.23, -1.69]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_117.geometry} material={nodes.primitive_color_117.material} />
                    </group>
                    <group position={[2.87, -1.7, 1.63]} rotation={[-0.2, -0.17, 1.36]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_118.geometry} material={nodes.primitive_color_118.material} />
                    </group>
                    <group position={[0.16, 2.88, 1.07]} rotation={[0.66, 0.48, 1.24]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_119.geometry} material={nodes.primitive_color_119.material} />
                    </group>
                    <group position={[-0.29, 2.87, 1.37]} rotation={[-0.66, 0.47, -1.22]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_120.geometry} material={nodes.primitive_color_120.material} />
                    </group>
                    <group position={[0.39, 2.74, 0.58]} rotation={[-1.97, -0.3, 0.2]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_121.geometry} material={nodes.primitive_color_121.material} />
                    </group>
                    <group position={[0.28, 2.5, 0.1]} rotation={[1.09, -0.12, -0.19]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_122.geometry} material={nodes.primitive_color_122.material} />
                    </group>
                    <group position={[-3.88, 1.2, -0.22]} rotation={[-0.13, -0.13, 1.57]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_123.geometry} material={nodes.primitive_color_123.material} />
                    </group>
                    <group position={[-4.42, 1.2, -0.28]} rotation={[0.13, -0.12, -1.54]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_124.geometry} material={nodes.primitive_color_124.material} />
                    </group>
                    <group position={[-3.48, 1.17, 0.16]} rotation={[1.66, -0.21, -0.19]} scale={[0.2, 0.34, 0.2]}>
                        <mesh geometry={nodes.primitive_color_125.geometry} material={nodes.primitive_color_125.material} />
                    </group>
                    <group position={[-3.37, 1.1, 0.69]} rotation={[-1.41, -0.16, 0.19]} scale={[0.2, 0.2, 0.2]}>
                        <mesh geometry={nodes.primitive_color_126.geometry} material={nodes.primitive_color_126.material} />
                    </group>
                    <group position={[-0.13, -0.37, -24.51]} />
                    <group rotation={[0.25, -0.26, 0]} />
                    <group rotation={[0.72, 0.5, 0]} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
                <p className="text-xl text-justify">The white stuff we know as sugar is sucrose, a molecule composed of 12 atoms of carbon, 22 atoms of hydrogen, and 11 atoms of oxygen (C12H22O11).</p>
            </div>
        )
    }
    else if (snap.current === "material_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oxygen</h1>
                <p className="text-xl text-justify">A more complex example is sucrose (table sugar), which is 42.11% carbon, 6.48% hydrogen, and 51.41% oxygen by mass. </p>
            </div>
        )
    }
    else if (snap.current === "material_2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Carbon</h1>
                <p className="text-xl text-justify">In the sucrose molecule there are 12 carbon atoms, and 2 ring-shaped structures, each containing an oxygen atom.</p>
            </div>
        )
    }

    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Sucrose to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/5d2d9243-5705-4acb-a040-fcea69386b7a" alt="Molecule QR" />
                    <a href="https://go.echoar.xyz/WYRA" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Sucrose() {
    return (
        <>
            <div className="pt-24 bg-ARbg">

                <Link to="/chemMolecule" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        Sucrose
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Sucrose is a glycosyl glycoside formed by glucose and fructose units joined by an acetal oxygen bridge from hemiacetal of glucose to the hemiketal of the fructose. It has a role as an osmolyte, a sweetening agent, a human metabolite, an algal metabolite, a Saccharomyces cerevisiae metabolite, an Escherichia coli metabolite and a mouse metabolite.
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.2} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
