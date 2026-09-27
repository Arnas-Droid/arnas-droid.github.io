# Renderer
**Author:** Arnas

## BaseRenderer
- Shared renderer interface.
- Supports DirectX 11 backend with DirectX 12 in progress.

### DX11 Renderer
- Primary rendering backend.

### DX12 Renderer
- Currently renders a triangle.

## Rendering Pipeline (Main)
### 1. Shadow Pass
Generates a show map from the directional light's perspective.

**Outputs:**
- Shadow depth texture.

### 2. Scene Pass
Renders scene colour and scene depth.

**Outputs:**
- Scene colour texture.
- Scene depth texture.

### 3. Occlusion Pass
Generates an occlusion buffer for the first version of volumetric lighting, inspired by GPU Gems 3.

**Outputs:**
- Occlusion texture.

### 4. Volumetric Pass
Performs volumetric lighting via ray marched participating media.

**Stages:**
- Samples scene data (scene colour and depth).
- Reconstruct world position.
- Create camera ray.
- Intersect with light volumes.
- March through media.
- Get density.
- Shadow/occlusion tests.
- Accumulate scattering.
- Apply transmittance (light absorption).
- Blend with scene colour.

### 5.1. Blend Pass
Combines all render targets (scene and volumetric lighting) into final frame.

**Output:**
- Back buffer

### 5.2. Debug Pass
Renderers buffer views for debugging purposes.

**Debug View:**
- Depth buffer.
- Shadow map buffer.
- Scene buffer.
- Occlusion buffer.
- Volumetric lighting buffer.
- enum class DebugTexture

## Shaders
[Volumetric Lighting](VolumetricLighting.md) - Goes over the main volumetric lighting of the artefact.

[<-- Go Back](../Architecture.md)

[<-- Go Back Fully](../Overview.md)