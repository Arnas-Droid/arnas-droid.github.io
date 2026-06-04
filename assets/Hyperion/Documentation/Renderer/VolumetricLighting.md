# Volume Bound Volumetric Lighting
**Author:** Arnas

## Overview
The volumetric lighting system is a post processing pass that ray marches through participting media volumes.

## Supported volume types
- Sphere.
- Box.
- Cone.

## Functions
```c++
float3 GetRayDir(float2 uv, float4x4 invView, float4x4 invProjection)

- 'uv' = Screen UV.
- 'invView' = Inverse camera view matrix.
- 'invProjection' = Inverse camera projection matrix.
```
This function reconstructs world space ray direction from screen UV coordinates. Used for volumetric raymarching.

```c++
float3 WorldPosReconstruction(float2 uv, float depth)

- 'uv' = Screen UV.
- 'depth' = Depth buffer value at that pixel.
```
This function reconstructs world space position from screen UV coordiantes and depth buffer. Used for volumetric raymarching.

```c++
float3 WorldPosReconstruction(float2 uv, float depth)

- 'uv' = Screen UV.
- 'depth' = Depth buffer value at that pixel.
```
This function reconstructs world space position from screen UV coordiantes and depth buffer. Used for volumetric raymarching.

```c++
float hash31(float3 p)

- 'p' = 3D input position.
```
This function generates pseudo-radom value from a 3D position. Used for avoiding uniform lighting.

```c++
bool OcclusionTest(float3 worldPos, float4x4 viewProjection, Texture2D depthTex, SamplerState samplerState)

- 'worldPos' = World position for testing.
- 'viewProjection' = Camera view projection matrix.
- 'depthTex' = Scene depth buffer.
- 'samplerState' = Sampler for depth texture.

```
This function checks whether a world space position is hiddent behind scene geometry from the camera. Used to prevent volumetric lighting from rendering through walls and objects.

```c++
float ShadowTest(float3 worldPos) 

- 'worldPos' = World position for testing.

```
This function checks whether the world position point is lit or in shadow from the light source.

```c++
bool RayVolumeIntersect(float3 rayOrigin, float3 rayDir, LightVolume volume, out float rayEnter, out float rayExit)

- 'rayOrigin' = Starting point of the ray (camera position).
- 'rayDir' = Direction of the ray.
- 'volume' = Tyoe of volume.
- 'rayEnter' = Distance at where the ray enters the volume.
- 'rayExit' = Distance at where the ray exits the volume.

```
This function checks where the camera passes through a light volume and calculates where it enters and exits said volume. Used to limit where volumetric lighting apears to specefic areas.

```c++
float GetDensity(LightVolume volume, float3 worldPos, float3 rayDir, float time)

'volume' = Data like its shape, size and strength.
'worldPos' = The position it is in world space.
'rayDir' = The camera ray direction.
'time' = Used to animate noise over time.
```
This function decides how dense the volume is at the specefic point in space. It is used to control how much light is visable while the ray marches through a participating volume.


[<-- Go Back](Renderer.md)

[<-- Go Back Fully](../Overview.md)