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
        primitive_color_127: THREE.Mesh
        primitive_color_128: THREE.Mesh
        primitive_color_129: THREE.Mesh
        primitive_color_130: THREE.Mesh
        primitive_color_131: THREE.Mesh
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
    const { nodes, materials } = useGLTF('/octyl_glucoside/scene.gltf') as GLTFResult
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
                    <group position={[-1, 1.77, -0.21]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color.geometry} material={nodes.primitive_color.material} />
                    </group>
                    <group position={[-0.05, 0.59, -0.49]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_1.geometry} material={nodes.primitive_color_1.material} />
                    </group>
                    <group position={[1.18, 0.68, 0.44]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_2.geometry} material={nodes.primitive_color_2.material} />
                    </group>
                    <group position={[-0.21, 3.09, -0.3]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_3.geometry} material={nodes.primitive_color_3.material} />
                    </group>
                    <group position={[0.86, 3.1, 0.64]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_4.geometry} material={nodes.primitive_color_4.material} />
                    </group>
                    <group position={[1.83, 2.09, 0.36]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_5.geometry} material={nodes.primitive_color_5.material} />
                    </group>
                    <group position={[-1.11, 4.3, -0.02]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_6.geometry} material={nodes.primitive_color_6.material} />
                    </group>
                    <group position={[0.19, 3.25, -1.33]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_7.geometry} material={nodes.primitive_color_7.material} />
                    </group>
                    <group position={[-2.17, 4.35, -0.94]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_8.geometry} material={nodes.primitive_color_8.material} />
                    </group>
                    <group position={[-2.79, 5.05, -0.62]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_9.geometry} material={nodes.primitive_color_9.material} />
                    </group>
                    <group position={[-0.51, 5.23, -0.11]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_10.geometry} material={nodes.primitive_color_10.material} />
                    </group>
                    <group position={[-1.52, 4.23, 1.02]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_11.geometry} material={nodes.primitive_color_11.material} />
                    </group>
                    <group position={[-1.55, 1.65, 1.08]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_12.geometry} material={nodes.primitive_color_12.material} />
                    </group>
                    <group position={[-2.27, 0.97, 1.03]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_13.geometry} material={nodes.primitive_color_13.material} />
                    </group>
                    <group position={[-1.83, 1.77, -0.96]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_14.geometry} material={nodes.primitive_color_14.material} />
                    </group>
                    <group position={[0.31, 0.53, -1.85]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_15.geometry} material={nodes.primitive_color_15.material} />
                    </group>
                    <group position={[-0.58, -0.37, -0.28]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_16.geometry} material={nodes.primitive_color_16.material} />
                    </group>
                    <group position={[0.9, 1.28, -2.08]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_17.geometry} material={nodes.primitive_color_17.material} />
                    </group>
                    <group position={[0.78, 0.46, 1.77]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_18.geometry} material={nodes.primitive_color_18.material} />
                    </group>
                    <group position={[1.94, -0.08, 0.16]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_19.geometry} material={nodes.primitive_color_19.material} />
                    </group>
                    <group position={[0.67, -0.52, 1.88]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_20.geometry} material={nodes.primitive_color_20.material} />
                    </group>
                    <group position={[2.81, 2.14, 1.38]} scale={0.38}>
                        <mesh geometry={nodes.primitive_color_21.geometry} material={nodes.primitive_color_21.material} />
                    </group>
                    <group position={[2.27, 2.28, -0.65]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_22.geometry} material={nodes.primitive_color_22.material} />
                    </group>
                    <group position={[4.14, 2.33, 0.96]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_23.geometry} material={nodes.primitive_color_23.material} />
                    </group>
                    <group position={[4.49, 3.83, 0.99]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_24.geometry} material={nodes.primitive_color_24.material} />
                    </group>
                    <group position={[4.39, 1.86, -0.02]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_25.geometry} material={nodes.primitive_color_25.material} />
                    </group>
                    <group position={[4.76, 1.81, 1.71]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_26.geometry} material={nodes.primitive_color_26.material} />
                    </group>
                    <group position={[5.99, 4.15, 1.21]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_27.geometry} material={nodes.primitive_color_27.material} />
                    </group>
                    <group position={[3.99, 4.26, 1.89]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_28.geometry} material={nodes.primitive_color_28.material} />
                    </group>
                    <group position={[4.08, 4.34, 0.1]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_29.geometry} material={nodes.primitive_color_29.material} />
                    </group>
                    <group position={[6.98, 3.71, 0.11]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_30.geometry} material={nodes.primitive_color_30.material} />
                    </group>
                    <group position={[6.31, 3.7, 2.17]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_31.geometry} material={nodes.primitive_color_31.material} />
                    </group>
                    <group position={[6.05, 5.25, 1.31]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_32.geometry} material={nodes.primitive_color_32.material} />
                    </group>
                    <group position={[8.37, 4.27, 0.46]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_33.geometry} material={nodes.primitive_color_33.material} />
                    </group>
                    <group position={[6.65, 4.13, -0.87]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_34.geometry} material={nodes.primitive_color_34.material} />
                    </group>
                    <group position={[7, 2.6, 0.04]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_35.geometry} material={nodes.primitive_color_35.material} />
                    </group>
                    <group position={[9.47, 3.99, -0.58]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_36.geometry} material={nodes.primitive_color_36.material} />
                    </group>
                    <group position={[8.7, 3.9, 1.46]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_37.geometry} material={nodes.primitive_color_37.material} />
                    </group>
                    <group position={[8.28, 5.37, 0.53]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_38.geometry} material={nodes.primitive_color_38.material} />
                    </group>
                    <group position={[9.91, 2.52, -0.7]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_39.geometry} material={nodes.primitive_color_39.material} />
                    </group>
                    <group position={[10.37, 4.59, -0.31]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_40.geometry} material={nodes.primitive_color_40.material} />
                    </group>
                    <group position={[9.12, 4.35, -1.57]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_41.geometry} material={nodes.primitive_color_41.material} />
                    </group>
                    <group position={[10.59, 2, 0.56]} scale={0.42}>
                        <mesh geometry={nodes.primitive_color_42.geometry} material={nodes.primitive_color_42.material} />
                    </group>
                    <group position={[9.89, 1.97, 1.42]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_43.geometry} material={nodes.primitive_color_43.material} />
                    </group>
                    <group position={[11.47, 2.63, 0.83]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_44.geometry} material={nodes.primitive_color_44.material} />
                    </group>
                    <group position={[10.96, 0.96, 0.38]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_45.geometry} material={nodes.primitive_color_45.material} />
                    </group>
                    <group position={[10.66, 2.47, -1.53]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_46.geometry} material={nodes.primitive_color_46.material} />
                    </group>
                    <group position={[9.06, 1.88, -0.98]} scale={0.25}>
                        <mesh geometry={nodes.primitive_color_47.geometry} material={nodes.primitive_color_47.material} />
                    </group>
                    <group position={[-0.53, 1.18, -0.35]} rotation={[-0.21, 0.5, -2.36]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_48.geometry} material={nodes.primitive_color_48.material} />
                    </group>
                    <group position={[0.56, 0.64, -0.03]} rotation={[-0.77, -0.54, 1.19]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_49.geometry} material={nodes.primitive_color_49.material} />
                    </group>
                    <group position={[-0.6, 2.43, -0.26]} rotation={[-0.06, 0.02, -0.54]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_50.geometry} material={nodes.primitive_color_50.material} />
                    </group>
                    <group position={[0.22, 3.1, 0.07]} rotation={[0.86, -0.52, -1.04]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_51.geometry} material={nodes.primitive_color_51.material} />
                    </group>
                    <group position={[0.49, 3.1, 0.31]} rotation={[-0.86, -0.52, 1.05]} scale={[0.2, 0.18, 0.2]}>
                        <mesh geometry={nodes.primitive_color_52.geometry} material={nodes.primitive_color_52.material} />
                    </group>
                    <group position={[1.51, 1.39, 0.4]} rotation={[-0.05, 0.01, -0.43]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_53.geometry} material={nodes.primitive_color_53.material} />
                    </group>
                    <group position={[1.45, 2.49, 0.47]} rotation={[0.2, 0.08, 0.75]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_54.geometry} material={nodes.primitive_color_54.material} />
                    </group>
                    <group position={[1.2, 2.75, 0.54]} rotation={[-0.22, 0.47, -2.28]} scale={[0.2, 0.18, 0.2]}>
                        <mesh geometry={nodes.primitive_color_55.geometry} material={nodes.primitive_color_55.material} />
                    </group>
                    <group position={[-0.66, 3.7, -0.16]} rotation={[0.19, 0.06, 0.63]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_56.geometry} material={nodes.primitive_color_56.material} />
                    </group>
                    <group position={[-0.01, 3.17, -0.8]} rotation={[-1.31, 0.29, -0.38]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_57.geometry} material={nodes.primitive_color_57.material} />
                    </group>
                    <group position={[0.09, 3.21, -1.07]} rotation={[1.56, 0.39, 0.39]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_58.geometry} material={nodes.primitive_color_58.material} />
                    </group>
                    <group position={[-1.8, 4.33, -0.62]} rotation={[0.87, -0.54, -1.07]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_59.geometry} material={nodes.primitive_color_59.material} />
                    </group>
                    <group position={[-1.53, 4.32, -0.39]} rotation={[-0.85, -0.5, 1.03]} scale={[0.2, 0.18, 0.2]}>
                        <mesh geometry={nodes.primitive_color_60.geometry} material={nodes.primitive_color_60.material} />
                    </group>
                    <group position={[-2.45, 4.67, -0.79]} rotation={[0.33, 0.12, 0.68]} scale={[0.2, 0.14, 0.2]}>
                        <mesh geometry={nodes.primitive_color_61.geometry} material={nodes.primitive_color_61.material} />
                    </group>
                    <group position={[-2.62, 4.86, -0.71]} rotation={[-0.46, 0.77, -2.09]} scale={[0.2, 0.12, 0.2]}>
                        <mesh geometry={nodes.primitive_color_62.geometry} material={nodes.primitive_color_62.material} />
                    </group>
                    <group position={[-0.82, 4.75, -0.06]} rotation={[-0.08, 0.02, -0.57]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_63.geometry} material={nodes.primitive_color_63.material} />
                    </group>
                    <group position={[-0.66, 5, -0.08]} rotation={[0.08, 0.27, 2.55]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_64.geometry} material={nodes.primitive_color_64.material} />
                    </group>
                    <group position={[-1.31, 4.27, 0.48]} rotation={[1.49, 0.37, 0.4]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_65.geometry} material={nodes.primitive_color_65.material} />
                    </group>
                    <group position={[-1.41, 4.25, 0.76]} rotation={[-1.37, 0.32, -0.39]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_66.geometry} material={nodes.primitive_color_66.material} />
                    </group>
                    <group position={[-1.36, 1.69, 0.63]} rotation={[-1.33, 0.34, -0.43]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_67.geometry} material={nodes.primitive_color_67.material} />
                    </group>
                    <group position={[-1.22, 1.72, 0.3]} rotation={[1.48, 0.4, 0.44]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_68.geometry} material={nodes.primitive_color_68.material} />
                    </group>
                    <group position={[-1.88, 1.34, 1.06]} rotation={[-0.05, -0.11, 2.33]} scale={[0.2, 0.14, 0.2]}>
                        <mesh geometry={nodes.primitive_color_69.geometry} material={nodes.primitive_color_69.material} />
                    </group>
                    <group position={[-2.07, 1.16, 1.05]} rotation={[0.05, -0.02, -0.81]} scale={[0.2, 0.12, 0.2]}>
                        <mesh geometry={nodes.primitive_color_70.geometry} material={nodes.primitive_color_70.material} />
                    </group>
                    <group position={[-1.4, 1.77, -0.57]} rotation={[-0.88, -0.52, 1.03]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_71.geometry} material={nodes.primitive_color_71.material} />
                    </group>
                    <group position={[-1.62, 1.77, -0.77]} rotation={[0.88, -0.52, -1.03]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_72.geometry} material={nodes.primitive_color_72.material} />
                    </group>
                    <group position={[0.09, 0.56, -1.03]} rotation={[-1.55, 0.26, -0.27]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_73.geometry} material={nodes.primitive_color_73.material} />
                    </group>
                    <group position={[0.18, 0.55, -1.38]} rotation={[1.46, 0.24, 0.26]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_74.geometry} material={nodes.primitive_color_74.material} />
                    </group>
                    <group position={[-0.31, 0.13, -0.39]} rotation={[0.24, 0.68, 2.48]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_75.geometry} material={nodes.primitive_color_75.material} />
                    </group>
                    <group position={[-0.45, -0.12, -0.33]} rotation={[-0.19, 0.05, -0.5]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_76.geometry} material={nodes.primitive_color_76.material} />
                    </group>
                    <group position={[0.58, 0.88, -1.96]} rotation={[-0.23, 0.08, -0.65]} scale={[0.2, 0.14, 0.2]}>
                        <mesh geometry={nodes.primitive_color_77.geometry} material={nodes.primitive_color_77.material} />
                    </group>
                    <group position={[0.74, 1.08, -2.02]} rotation={[0.29, 0.62, 2.3]} scale={[0.2, 0.12, 0.2]}>
                        <mesh geometry={nodes.primitive_color_78.geometry} material={nodes.primitive_color_78.material} />
                    </group>
                    <group position={[1.02, 0.59, 0.97]} rotation={[1.64, 0.33, 0.3]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_79.geometry} material={nodes.primitive_color_79.material} />
                    </group>
                    <group position={[0.92, 0.54, 1.31]} rotation={[-1.33, 0.23, -0.3]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_80.geometry} material={nodes.primitive_color_80.material} />
                    </group>
                    <group position={[1.55, 0.31, 0.3]} rotation={[-0.31, 0.58, -2.19]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_81.geometry} material={nodes.primitive_color_81.material} />
                    </group>
                    <group position={[1.75, 0.11, 0.23]} rotation={[0.26, 0.1, 0.75]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_82.geometry} material={nodes.primitive_color_82.material} />
                    </group>
                    <group position={[0.73, 0.01, 1.82]} rotation={[1.41, 1.46, 1.62]} scale={[0.2, 0.14, 0.2]}>
                        <mesh geometry={nodes.primitive_color_83.geometry} material={nodes.primitive_color_83.material} />
                    </group>
                    <group position={[0.7, -0.25, 1.85]} rotation={[-0.11, 0.01, -0.11]} scale={[0.2, 0.12, 0.2]}>
                        <mesh geometry={nodes.primitive_color_84.geometry} material={nodes.primitive_color_84.material} />
                    </group>
                    <group position={[2.22, 2.11, 0.77]} rotation={[0.97, -0.5, -0.9]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_85.geometry} material={nodes.primitive_color_85.material} />
                    </group>
                    <group position={[2.47, 2.12, 1.03]} rotation={[-1.01, -0.54, 0.94]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_86.geometry} material={nodes.primitive_color_86.material} />
                    </group>
                    <group position={[2.04, 2.18, -0.13]} rotation={[-1.25, 0.31, -0.43]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_87.geometry} material={nodes.primitive_color_87.material} />
                    </group>
                    <group position={[2.16, 2.23, -0.4]} rotation={[1.55, 0.44, 0.45]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_88.geometry} material={nodes.primitive_color_88.material} />
                    </group>
                    <group position={[3.61, 2.26, 1.13]} rotation={[0.33, 0.34, 1.6]} scale={[0.2, 0.19, 0.2]}>
                        <mesh geometry={nodes.primitive_color_89.geometry} material={nodes.primitive_color_89.material} />
                    </group>
                    <group position={[3.27, 2.21, 1.24]} rotation={[-0.32, 0.25, -1.35]} scale={[0.2, 0.17, 0.2]}>
                        <mesh geometry={nodes.primitive_color_90.geometry} material={nodes.primitive_color_90.material} />
                    </group>
                    <group position={[4.32, 3.08, 0.97]} rotation={[-0.03, -0.22, 2.91]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_91.geometry} material={nodes.primitive_color_91.material} />
                    </group>
                    <group position={[4.26, 2.1, 0.48]} rotation={[-1.94, 0.35, -0.24]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_92.geometry} material={nodes.primitive_color_92.material} />
                    </group>
                    <group position={[4.33, 1.98, 0.23]} rotation={[1.08, 0.14, 0.23]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_93.geometry} material={nodes.primitive_color_93.material} />
                    </group>
                    <group position={[4.44, 2.08, 1.32]} rotation={[1.4, -0.81, -0.94]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_94.geometry} material={nodes.primitive_color_94.material} />
                    </group>
                    <group position={[4.61, 1.94, 1.52]} rotation={[-0.78, -0.26, 0.62]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_95.geometry} material={nodes.primitive_color_95.material} />
                    </group>
                    <group position={[5.24, 3.99, 1.1]} rotation={[-0.14, -0.17, 1.76]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_96.geometry} material={nodes.primitive_color_96.material} />
                    </group>
                    <group position={[4.25, 4.03, 1.43]} rotation={[0.98, 0.26, 0.49]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_97.geometry} material={nodes.primitive_color_97.material} />
                    </group>
                    <group position={[4.12, 4.15, 1.66]} rotation={[-1.64, 0.63, -0.59]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_98.geometry} material={nodes.primitive_color_98.material} />
                    </group>
                    <group position={[4.29, 4.07, 0.56]} rotation={[-0.97, -0.21, 0.39]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_99.geometry} material={nodes.primitive_color_99.material} />
                    </group>
                    <group position={[4.18, 4.21, 0.33]} rotation={[1.82, -0.59, -0.47]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_100.geometry} material={nodes.primitive_color_100.material} />
                    </group>
                    <group position={[6.48, 3.93, 0.66]} rotation={[0.87, 0.36, 0.76]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_101.geometry} material={nodes.primitive_color_101.material} />
                    </group>
                    <group position={[6.14, 3.93, 1.67]} rotation={[1.86, -0.44, -0.33]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_102.geometry} material={nodes.primitive_color_102.material} />
                    </group>
                    <group position={[6.23, 3.81, 1.93]} rotation={[-1.08, -0.18, 0.3]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_103.geometry} material={nodes.primitive_color_103.material} />
                    </group>
                    <group position={[6.02, 4.68, 1.25]} rotation={[0.09, 0, -0.06]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_104.geometry} material={nodes.primitive_color_104.material} />
                    </group>
                    <group position={[6.04, 4.97, 1.28]} rotation={[-2.93, -1.13, 0.14]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_105.geometry} material={nodes.primitive_color_105.material} />
                    </group>
                    <group position={[7.67, 3.99, 0.29]} rotation={[-0.24, -0.33, 1.87]} scale={[0.2, 0.4, 0.2]}>
                        <mesh geometry={nodes.primitive_color_106.geometry} material={nodes.primitive_color_106.material} />
                    </group>
                    <group position={[6.82, 3.91, -0.36]} rotation={[-1.11, -0.18, 0.3]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_107.geometry} material={nodes.primitive_color_107.material} />
                    </group>
                    <group position={[6.74, 4.03, -0.62]} rotation={[1.84, -0.42, -0.32]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_108.geometry} material={nodes.primitive_color_108.material} />
                    </group>
                    <group position={[6.99, 3.17, 0.07]} rotation={[-3.06, 0.58, -0.02]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_109.geometry} material={nodes.primitive_color_109.material} />
                    </group>
                    <group position={[6.99, 2.88, 0.06]} rotation={[0.07, 0, 0.02]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_110.geometry} material={nodes.primitive_color_110.material} />
                    </group>
                    <group position={[8.92, 4.13, -0.06]} rotation={[0.84, 0.42, 0.9]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_111.geometry} material={nodes.primitive_color_111.material} />
                    </group>
                    <group position={[8.53, 4.09, 0.95]} rotation={[1.79, -0.4, -0.32]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_112.geometry} material={nodes.primitive_color_112.material} />
                    </group>
                    <group position={[8.62, 4, 1.21]} rotation={[-1.16, -0.2, 0.3]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_113.geometry} material={nodes.primitive_color_113.material} />
                    </group>
                    <group position={[8.33, 4.8, 0.5]} rotation={[0.06, 0, 0.08]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_114.geometry} material={nodes.primitive_color_114.material} />
                    </group>
                    <group position={[8.31, 5.09, 0.52]} rotation={[-0.21, 1.27, -2.85]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_115.geometry} material={nodes.primitive_color_115.material} />
                    </group>
                    <group position={[9.69, 3.26, -0.64]} rotation={[0.08, 0.01, 0.29]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_116.geometry} material={nodes.primitive_color_116.material} />
                    </group>
                    <group position={[9.9, 4.28, -0.45]} rotation={[0.25, -0.13, -0.95]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_117.geometry} material={nodes.primitive_color_117.material} />
                    </group>
                    <group position={[10.14, 4.44, -0.38]} rotation={[-0.27, -0.44, 2.04]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_118.geometry} material={nodes.primitive_color_118.material} />
                    </group>
                    <group position={[9.3, 4.17, -1.06]} rotation={[-1.15, -0.22, 0.33]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_119.geometry} material={nodes.primitive_color_119.material} />
                    </group>
                    <group position={[9.21, 4.26, -1.32]} rotation={[1.77, -0.44, -0.36]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_120.geometry} material={nodes.primitive_color_120.material} />
                    </group>
                    <group position={[10.25, 2.26, -0.07]} rotation={[-1.04, -0.28, 0.48]} scale={[0.2, 0.39, 0.2]}>
                        <mesh geometry={nodes.primitive_color_121.geometry} material={nodes.primitive_color_121.material} />
                    </group>
                    <group position={[10.25, 1.98, 0.98]} rotation={[1.1, 0.53, 0.83]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_122.geometry} material={nodes.primitive_color_122.material} />
                    </group>
                    <group position={[10.07, 1.98, 1.2]} rotation={[-1.07, 0.5, -0.81]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_123.geometry} material={nodes.primitive_color_123.material} />
                    </group>
                    <group position={[11.01, 2.3, 0.69]} rotation={[0.24, -0.12, -0.91]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_124.geometry} material={nodes.primitive_color_124.material} />
                    </group>
                    <group position={[11.25, 2.47, 0.76]} rotation={[-0.27, -0.45, 2.08]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_125.geometry} material={nodes.primitive_color_125.material} />
                    </group>
                    <group position={[10.77, 1.49, 0.48]} rotation={[-0.25, 0.87, -2.61]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_126.geometry} material={nodes.primitive_color_126.material} />
                    </group>
                    <group position={[10.86, 1.22, 0.43]} rotation={[0.16, 0.03, 0.33]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_127.geometry} material={nodes.primitive_color_127.material} />
                    </group>
                    <group position={[10.28, 2.5, -1.1]} rotation={[-1.05, 0.55, -0.91]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_128.geometry} material={nodes.primitive_color_128.material} />
                    </group>
                    <group position={[10.47, 2.48, -1.32]} rotation={[0.99, 0.49, 0.87]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_129.geometry} material={nodes.primitive_color_129.material} />
                    </group>
                    <group position={[9.5, 2.21, -0.84]} rotation={[-0.28, -0.48, 2.09]} scale={[0.2, 0.16, 0.2]}>
                        <mesh geometry={nodes.primitive_color_130.geometry} material={nodes.primitive_color_130.material} />
                    </group>
                    <group position={[9.27, 2.04, -0.91]} rotation={[0.25, -0.12, -0.89]} scale={[0.2, 0.13, 0.2]}>
                        <mesh geometry={nodes.primitive_color_131.geometry} material={nodes.primitive_color_131.material} />
                    </group>
                    <group position={[-4.34, -2.43, -96]} />
                    <group rotation={[0.25, -0.26, 0]} />
                    <group rotation={[0.72, 0.5, 0]} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oxygen</h1>
                <p className="text-xl text-justify">Co-encapsulation of the allosteric factor inositol hexaphosphate led to oxygen dissociation curve values almost identical to those of whole blood. The oxygen-release capacity of Hb liposome suspensions in the physiological partial pressure range was comparable to whole blood. </p>
            </div>
        )
    }
    else if (snap.current === "material_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
            </div>
        )
    }
    else if (snap.current === "material_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Carbon</h1>
            </div>
        )
    }

    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Octyl Glucoside molecule to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/5536ac9f-0daa-4643-a916-972fa31f166b" alt="Molecule QR" />
                    <a href="https://go.echoar.xyz/XvMY" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }

}

export default function Glucoside() {
    return (
        <>
            <div className="pt-24 bg-ARbg">

                <Link to="/chemMolecule" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        Octyl Glucoside
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Octyl glucoside is a nonionic surfactant frequently used to solubilise integral membrane proteins for studies in biochemistry. Structurally, it is a glycoside derived from glucose and octanol. Like Genapol X-100 and Triton X-100, it is a nonphysiological amphiphile that makes lipid bilayers less "stiff".</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.1} />
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
