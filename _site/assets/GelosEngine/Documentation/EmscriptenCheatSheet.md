# Emscripten Web Build Cheat Sheet
**Author:** Arnas
## 1. One-Time Setup
### Clone SDK
```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
```
### Clone SDK
```bash
emsdk install latest
```
### Activate Latest Version
```bash
emsdk install latest
```

## 2. Start Emscripten
### Home
```bash
cd C:\Users\apuid\emsdk
```
### University
```bash
cd C:\Users\username\emsdk
```
### Activate Enviroment
```bash
emsdk_env.bat
```
### Verify Installation
```bash
emcc --version
```

## 3. Open Project
### Home
```bash
cd "C:\Users\apuid\Documents\GitHub\gdev60020-25-cross-platform-framework-this-team-is-an-xbox\CPED This Team is an Xbox\CPED This Team is an Xbox"
```
### University
```bash
cd "C:\Users\username\Documents\GitHub\gdev60020-25-cross-platform-framework-this-team-is-an-xbox\CPED This Team is an Xbox\CPED This Team is an Xbox"
```

## 4. Basic Builds
### Blank WebGL2 Build
```bash
emcc main.cpp -o index.html -s USE_WEBGL2=1 -s FULL_ES3=1
```

### Build With Assets
```bash
emcc main.cpp -o index.html -s USE_WEBGL2=1 -s FULL_ES3=1 --preload-file smile.png
```

## 5. Full Project Build
```bash
emcc main.cpp GameEngine.cpp GameObject.cpp BaseRenderer.cpp WebRenderer.cpp RendererTypes_web.cpp -o index.html -s USE_WEBGL2=1 -s FULL_ES3=1 -s ALLOW_MEMORY_GROWTH=1 -sASSERTIONS=2 --preload-file smile.png
```

## 6. Debug Build
### Don't publish debug build
```bash
emcc main.cpp GameEngine.cpp GameObject.cpp BaseRenderer.cpp WebRenderer.cpp RendererTypes_web.cpp -o index.html -sASSERTIONS=2 -sSAFE_HEAP=1 -sSTACK_OVERFLOW_CHECK=2 -gsource-map --preload-file smile.png
```

## 7. Run Local Server
### Start Server
```bash
python -m http.server
```
### Open Browser
```bash
http://localhost:8000/
```

## 8. Common Flags
| Flag                      | Description               |
|---------------------------|---------------------------|
| -s USE_WEBGL2=1           | Enable WebGL2             |
| -s FULL_ES3=1             | Enable OpenGL ES3 support |
| -s ASSERTIONS=2           | Runtime assertions        | 
| -s SAFE_HEAP=1            | Memory debugging          |
| -s STACK_OVERFLOW_CHECK=2 | Stack protection          | 
| -s ALLOW_MEMORY_GROWTH=1  | Dynamic memory growth     |

[<- Back to Web Port](WebPortImplementation.md)

[<- Back to Overview](../GraphicsOverview.md)